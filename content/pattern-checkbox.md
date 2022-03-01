---
# This is a generated file
title: "Checkbox"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/checkbox/

lang: en
last_updated: 2022-03-01
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#about-this-pattern">About This Pattern</a>
                  </li>
                 
                  <li>
                    <a href="#examples-1">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-5">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-5">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="checkbox"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> supports two types of <a href="https://w3c.github.io/aria/#checkbox" class="role-reference">checkbox</a> widgets:</p>
      <ol>
        <li>Dual-state: The most common type of checkbox, it allows the user to toggle between two choices -- checked and not checked.</li>
        <li>Tri-state: This type of checkbox supports an additional third state known as partially checked.</li>
      </ol>
      <p>
        One common use of a tri-state checkbox can be found in software installers where a single tri-state checkbox is used to represent and control the state of an entire group of install options.
        And, each option in the group can be individually turned on or off with a dual state checkbox.
      </p>
      <ul>
        <li>If all options in the group are checked, the overall state is represented by the tri-state checkbox displaying as checked.</li>
        <li>If some of the options in the group are checked, the overall state is represented with the tri-state checkbox displaying as partially checked.</li>
        <li>If none of the options in the group are checked, the overall state of the group is represented with the tri-state checkbox displaying as not checked.</li>
      </ul>
      <p>The user can use the tri-state checkbox to change all options in the group with a single action:</p>
      <ul>
        <li>Checking the overall checkbox checks all options in the group.</li>
        <li>Unchecking the overall checkbox will uncheck all options in the group.</li>
        <li>
          And, In some implementations, the system may remember which options were checked the last time the overall status was partially checked.
          If this feature is provided, activating the overall checkbox a third time recreates that partially checked state where only some options in the group are checked.
        </li>
      </ul>

      <section class="notoc examples-section"><img alt="" src="/assets/img/checkbox.svg" ><div class="header-wrapper"><h2 id="examples-1" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li>
            <a href="../../index/checkbox/checkbox.html">Checkbox (Two-State) Example</a>: Demonstrates a simple 2-state checkbox.
          </li>
          <li>
            <a href="../../index/checkbox/checkbox-mixed.html">Checkbox (Mixed-State) Example</a>:
            Demonstrates  a checkbox that uses the mixed  value for aria-checked to reflect and control checked states within a group of two-state HTML checkboxes contained in  an HTML <code>fieldset</code>.
          </li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-5" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>When the checkbox has focus, pressing the <kbd>Space</kbd> key changes the state of the checkbox.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-5" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The checkbox has role <a href="https://w3c.github.io/aria/#checkbox" class="role-reference">checkbox</a>.</li>
          <li>
            The checkbox has an accessible label provided by one of the following:
            <ul>
              <li>Visible text content contained within the element with role <code>checkbox</code>.</li>
              <li>A visible label referenced by the value of <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set on the element with role <code>checkbox</code>.</li>
              <li><a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> set on the element with role <code>checkbox</code>.</li>
            </ul>
          </li>
          <li>When checked, the checkbox element has state <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>true</code>.</li>
          <li>When not checked, it has state <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>false</code>.</li>
          <li>When partially checked, it has state <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>mixed</code>.</li>
          <li>If a set of checkboxes is presented as a logical group with a visible label, the checkboxes are included in an element with role <a href="https://w3c.github.io/aria/#group" class="role-reference">group</a> that has the property <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set to the ID of the element containing the label.</li>
          <li>If the presentation includes additional descriptive static text relevant to a checkbox or checkbox group, the checkbox or checkbox group has the property <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a> set to the ID of the element containing the description.</li>
        </ul>
      </section>
    </section>
          </div>
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
<script src="/assets/skipto.min.js"></script>
