
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById() selects a single element using its id attribute. It returns only one element and is very fast.

getElementsByClassName() selects elements using a class name. It returns a live HTMLCollection, which means it automatically updates if the DOM changes.

querySelector() selects the first element that matches a CSS selector. It can use id, class, tag name, or complex selectors.

querySelectorAll() selects all elements that match a CSS selector. It returns a static NodeList, which does not update automatically when the DOM changes.


2. How to create and insert a new element into the DOM

To create a new element, we use document.createElement().

Example:

let newElement = document.createElement("div");
newElement.textContent = "Hello World";

To insert it into the DOM, we can use methods like:

appendChild() – adds the element as the last child.

append() – adds the element inside a parent.

insertBefore() – inserts before a specified element.

3. What is Event Bubbling? How does it work?

Event Bubbling is the process where an event starts from the target element and then propagates upward to its parent elements in the DOM hierarchy.

For example, if a button inside a div is clicked, the event first triggers on the button, then on the div, then on the body, and so on up to the document.

The order is:
Target element → Parent → Ancestors → Document

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where a single event listener is added to a parent element to handle events for its child elements.

It works because of event bubbling.

It is useful because:

It improves performance (fewer event listeners).

It works for dynamically added elements.

It keeps the code clean and efficient.

5. Difference between preventDefault() and stopPropagation()

preventDefault() stops the browser’s default action.
Example: Preventing a form from submitting or stopping a link from navigating.

stopPropagation() stops the event from bubbling up to parent elements.

Difference:

preventDefault() controls default browser behavior.

stopPropagation() controls event flow in the DOM.