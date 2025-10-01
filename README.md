<span style="font-family:Courier New; color:blue;">1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
document.getElementById("id")
Selects a single element by its id.
Always returns one element (or null if not found).

document.getElementsByClassName("class")
Selects all elements with that class name.
Returns an HTMLCollection (live collection, auto-updates if DOM changes).

document.querySelector("selector")
Selects the first element that matches a CSS selector.
More flexible (supports classes, IDs, attributes, etc.).

document.querySelectorAll("selector")
Selects all elements that match a CSS selector.
Returns a NodeList (static, doesn’t auto-update).

2. How to create and insert a new element into the DOM?
Ans:
Example: Adding a new <p> inside a <div>:
const p = document.createElement("p");
p.textContent = "Hello, I am new here!";
const container = document.getElementById("container");
container.appendChild(p);

3.What is Event Bubbling and how does it work?
Definition: When an event happens on an element, it first runs on that element, then bubbles upward to its parent, then grandparent, and so on until document.
Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
click the button:
Child clicked
Parent clicked
because the event bubbles from child → parent.

4. What is Event Delegation in JavaScript? Why is it useful?

Definition: Event delegation means attaching an event listener to a parent element instead of multiple child elements. Since events bubble, the parent can “catch” events from children.
Example
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
 console.log("Clicked on:", e.target.innerText);
  }
});

Benefits:
Fewer event listeners → better performance.
Handles dynamically added child elements (you don’t need to re-attach listeners).

5. Difference between preventDefault() and stopPropagation()
event.preventDefault()
Stops the default browser action.
Example:
 Preventing form submission or link navigation.
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Form not submitted");
});
event.stopPropagation()
Stops the event from bubbling up to parent elements.
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); 
  console.log("Only child clicked");
});
</span>
