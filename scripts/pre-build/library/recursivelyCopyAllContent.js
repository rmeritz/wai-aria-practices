const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");
const fs = require("fs/promises");
const { rewriteSourcePath, sourceRoot } = require("./rewritePath");

const recursivelyCopyAllContent = async ({ forEachFile }) => {
  const sourcePaths = await getPaths(path.join(sourceRoot, "content"));

  for (const sourcePath of sourcePaths) {
    let sourceContents;
    const doesNotSupportUtf8 =
      sourcePath.endsWith(".png") || sourcePath.endsWith(".jpg");
    if (doesNotSupportUtf8) {
      sourceContents = await fs.readFile(sourcePath);
    } else {
      sourceContents = await fs.readFile(sourcePath, { encoding: "utf8" });
    }

    const { buildPath } = rewriteSourcePath(sourcePath);
    
    // Some files, notably templates, have no buildPath and can be ignored
    if (buildPath === null) continue; 
    
    const buildContents = await forEachFile(sourcePath, sourceContents);

    await fs.mkdir(path.dirname(buildPath), { recursive: true });
    await fs.writeFile(buildPath, buildContents, { encoding: "utf8" });
  }
};

module.exports = recursivelyCopyAllContent;
