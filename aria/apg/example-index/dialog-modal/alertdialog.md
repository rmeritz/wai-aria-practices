---
# This is a generated file
title: "Alert Dialog Example"
ref: /aria/apg/example-index/dialog-modal/alertdialog

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/dialog-modal/alertdialog.html
feedbackmail: public-aria-practices@w3.org
permalink: /aria/apg/example-index/dialog-modal/alertdialog

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/20'>View issues related to this example</a></p>            <p>Page last updated: November 23, 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<script src="../js/utils.js"></script>
<script src="js/dialog.js"></script>

<link href="css/dialog.css" rel="stylesheet" />
<script src="js/alertdialog.js"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/aria/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/aria/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/aria/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/aria/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/alertdialog.svg' | relative_url }}"
          class="example-page-example-icon"
        >
    
    <div>
      
      <p>
        The below example of a confirmation prompt demonstrates the <a href="{{ '/aria/apg/patterns/alertdialog/' | relative_url }}">design pattern for an alert dialog</a>.
        It also includes an example of the <a href="{{ '/aria/apg/patterns/alert/' | relative_url }}">design pattern for an alert</a> to make comparing the experiences provided by the two patterns easy.
      </p>
      <p>To use this example:</p>
      <ul>
        <li>
          Activate the "discard" button to trigger a confirmation dialog that has the <code>alertdialog</code> role.
          <ul>
            <li>Activating the "yes" button in the confirmation dialog removes the contents of both the "Notes" text area and local storage of the notes.</li>
            <li>Activating the "no" button or pressing <kbd>escape</kbd> closes the dialog.</li>
            <li>The "discard" button is disabled if the notes text area does not contain any text.</li>
          </ul>
        </li>
        <li>Activate the "save" button to trigger an alert when the contents of the "Notes" text area is saved to <a href="https://www.w3.org/TR/webstorage/#the-localstorage-attribute">local storage</a>.
          <ul>
            <li>A successful save triggers a short alert to notify the user that the notes have been saved.</li>
            <li>The "save" button is disabled if the user's local storage value is the same as the "Notes" field.</li>
          </ul>
        </li>
        <li>Modify the "notes" text area as needed to enable and disable the discard and save functions.</li>
      </ul>
      <p>
          Note: This example uses code from the <a href="dialog.html">modal dialog example</a> to create the behaviors of the <code>alertdialog</code> so referencing that example may be useful.
        </p>
      <p>Similar examples include:</p>
      <ul>
        <li><a href="../alert/alert.html">Alert</a>: a basic alert.</li>
        <li><a href="dialog.html">Modal Dialog Example</a>: An example demonstrating multiple layers of modal dialogs with both small and large amounts of content.</li>
        <li><a href="datepicker-dialog.html">Date Picker Dialog example</a>: Demonstrates a dialog containing a calendar grid for choosing a date.</li>
      </ul>
      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex_alertdialog">
          <label for="notes">Notes</label>
          <textarea class="notes" name="notes" id="notes" rows="7">This is an example text box, which unsurprisingly contains text. The user is given the option to save this text - which triggers a basic alert - or to discard the text - which triggers an alert dialog that prompts the user for confirmation.</textarea>
          <div class="visually-hidden" id="notes_save_status" role="alert"></div>
          <button type="button" id="notes_save">
            Save
            <svg class="icon spinner" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 32c-4.274 0-8.292-1.664-11.314-4.686s-4.686-7.040-4.686-11.314c0-3.026 0.849-5.973 2.456-8.522 1.563-2.478 3.771-4.48 6.386-5.791l1.344 2.682c-2.126 1.065-3.922 2.693-5.192 4.708-1.305 2.069-1.994 4.462-1.994 6.922 0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-0.69-4.853-1.994-6.922-1.271-2.015-3.066-3.643-5.192-4.708l1.344-2.682c2.615 1.31 4.824 3.313 6.386 5.791 1.607 2.549 2.456 5.495 2.456 8.522 0 4.274-1.664 8.292-4.686 11.314s-7.040 4.686-11.314 4.686z"></path>
            </svg>
            <svg class="icon check" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
            </svg>
          </button>
          <button type="button" data-textbox="notes" id="notes_discard" onclick="openAlertDialog('alert_dialog', this)">Discard</button>
          <div class="dialog-backdrop no-scroll">
            <div id="alert_dialog" role="alertdialog" aria-modal="true" aria-labelledby="dialog_label" aria-describedby="dialog_desc" class="hidden">
              <h2 id="dialog_label" class="dialog_label">Confirmation</h2>
              <div id="dialog_desc" class="dialog_desc">
                <p>Are you sure you want to discard all of your notes?</p>
              </div>
              <div class="dialog_form_actions">
                <button type="button" onclick="closeDialog(this)">No</button>
                <button type="button" id="notes_confirm" onclick="discardInput(this)">Yes</button>
              </div>
            </div>
          </div>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>
      <section>
        <h2>Accessibility Features</h2>
        <ul>
          <li>The accessible name of the alert dialog is set to its heading ("Confirmation").</li>
          <li>The dialog's prompt ("Are you sure...?") is referenced via <code>aria-describedby</code> to ensure that the user is immediately aware of the prompt.</li>
          <li>
            Focus is automatically set to the first focusable element inside the dialog, which is the "No" <code>button</code>.
            This is the least destructive action, so focusing "No" helps prevent users from accidentally confirming the destructive "Discard" action, which cannot be undone.
          </li>
          <li>
          When the buttons are disabled, <code>aria-disabled</code> is used instead of the HTML <code>disabled</code> attribute so the buttons will remain in the page <kbd>Tab</kbd> sequence.
          This makes it easier for screen reader users to discover the buttons and discern how the interface works.
          </li>
        </ul>
      </section>
      <section>
        <h2 id="kbd_label">Keyboard Support</h2>
        <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
          <thead>
            <tr>
              <th>Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><kbd>Tab</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to next focusable element inside the dialog.</li>
                  <li>When focus is on the last focusable element in the dialog, moves focus to the first focusable element in the dialog.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th><kbd>Shift + Tab</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to previous focusable element inside the dialog.</li>
                  <li>When focus is on the first focusable element in the dialog, moves focus to the last focusable element in the dialog.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th><kbd>Escape</kbd></th>
              <td>Closes the dialog.</td>
            </tr>
            <tr>
              <th><kbd>Command + S</kbd></th>
              <td>(Mac only) Save the contents of the notes <code>textarea</code> when focused.</td>
            </tr>
            <tr>
              <th><kbd>Control + S</kbd></th>
              <td>(Windows only) Save the contents of the notes <code>textarea</code> when focused.</td>
            </tr>
          </tbody>
        </table></div>
      </section>
      <section>
        <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
        <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>alertdialog</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>
                Identifies the element that serves as the alert dialog container.
              </td>
            </tr>
            <tr>
              <td></td>
              <th scope="row"><code>aria-labelledby="ID_REFERENCE"</code></th>
              <td><code>div</code></td>
              <td>
                Gives the alert dialog an accessible name by referring to the element that provides the alert dialog title.
              </td>
            </tr>
            <tr>
              <td></td>
              <th scope="row"><code>aria-describedby="ID_REFERENCE"</code></th>
              <td><code>div</code></td>
              <td>
                Gives the alert dialog an accessible description by referring to the alert dialog content that describes the primary message or purpose of the alert dialog.
              </td>
            </tr>
            <tr>
              <td></td>
              <th scope="row"><code>aria-modal="true"</code></th>
              <td><code>div</code></td>
              <td>
                Tells assistive technologies that the windows underneath the current alert dialog are not available for interaction (inert).
              </td>
            </tr>
              <tr>
                <th scope="row"><code>alert</code></th>
                <td></td>
                <td><code>div</code></td>
                <td>
                  Identifies the element that serves as the alert notification.
                </td>
              </tr>
              <tr>
              <td></td>
              <th scope="row"><code>aria-disabled="true"</code></th>
              <td><code>button</code></td>
              <td>Tells assistive technology users the button cannot be activated.</td>
            </tr>
          </tbody>
        </table></div>
        <h3>Notes on <code>aria-modal</code> and <code>aria-hidden</code></h3>
        <ul>
          <li>
            The <code>aria-modal</code> property was introduced in ARIA 1.1.
            As a relatively new property, screen reader users may experience varying degrees of support for it.
          </li>
          <li>
            Applying the <code>aria-modal</code> property to the <code>dialog</code> element replaces the technique of using <code>aria-hidden</code> on the background for informing assistive technologies that content outside a dialog is inert.
          </li>
          <li>
            In legacy dialog implementations where <code>aria-hidden</code> is used to make content outside a dialog inert for assistive technology users, it is important that:
            <ul>
              <li><code>aria-hidden</code> is set to <code>true</code> on each element containing a portion of the inert layer.</li>
              <li>The dialog element is not a descendant of any element that has <code>aria-hidden</code> set to <code>true</code>.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2 id="src_label">Javascript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li> CSS: <a href="css/dialog.css" type="text/css">dialog.css</a></li>
          <li> Javascript: <a href="js/alertdialog.js" type="text/javascript">alertdialog.js</a>, <a href="js/dialog.js" type="text/javascript">dialog.js</a>, <a href="../js/utils.js">utils.js</a></li>
        </ul>
      </section>
      <section>
        <h2 id="sc1_label">HTML Source Code</h2>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        <script>
          sourceCode.add('sc1', 'ex_alertdialog', 'ex_label', 'css_js_files');
          sourceCode.make();
        </script>
      </section>
    </div>
    
  
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script 
  src="{{ '/content-assets/wai-aria-practices/skipto.min.js' | relative_url }}"
></script>
