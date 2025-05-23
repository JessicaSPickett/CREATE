class styled-button from the document.
//    document.querySelector(".styled-button"); finds the button and assigns it to the constant variable button
const button = document.querySelector(".styled-button");

// 2. Adds an event listener to the 'button' element
//    button.addEventListener("click", () => {...}) listens for a click event on the button
//    When clicked, it triggers the function inside the parentheses
button.addEventListener("click", () => {
  // 3. Displays an alert box with the message Button function coming soon!
  //    alert("Button functionality coming soon!"); pops up a small message window when the button is clicked.
  alert("Button function coming soon!");
});

// ADD EVENT LISTENER
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
