const path = require("path");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath } = require("./rewritePath");
const { parse: parseHtml } = require("node-html-parser");
const rewriteElementPaths = require("./rewriteElementPaths");

const transformPattern = (sourcePath, sourceContents) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);
  const html = parseHtml(sourceContents);

  const slug = path.basename(sitePath);

  const title = html.querySelector("h1").innerHTML;
  html.querySelector("h1").remove();

  const baseCss = html.querySelectorAll("link").find((element) => {
    return element
      .toString()
      .includes("https://www.w3.org/StyleSheets/TR/2016/base.css");
  });
  baseCss.remove();

  const findExamplesSection = () => {
    const sectionElements = html.querySelectorAll("section");
    for (const sectionElement of sectionElements) {
      const h2 = sectionElement.querySelector("h2");
      if (!h2) continue;
      if (h2.textContent === "Example" || h2.textContent === "Examples") {
        return sectionElement;
      }
    }
    throw new Error(`Expected pattern ${slug} to have an Example(s) section`);
  };

  examplesSection = findExamplesSection();
  examplesSection.classList.add("examples-section");
  examplesSection.insertAdjacentHTML(
    "afterbegin",
    `<img 
      alt="" 
      src="{{ '/content-images/wai-aria-practices/img/${slug}.svg' | relative_url }}"
    />`
  );

  rewriteElementPaths(html, { onSourcePath: sourcePath });

  return formatForJekyll({
    title,
    sitePath,
    githubPath,
    content: html.querySelector("body").innerHTML,
    enableSidebar: true,
    head: html.querySelector("head").innerHTML,
    footer: "",
  });
};

module.exports = transformPattern;
