// ****************************************************************************
// window *********************************************************************

// open() - Opens a new window
// const youtubeURL = "https://www.youtube.com";
// window.open(youtubeURL);

// close() - Closes a window
// window.close();

// closed - Checkes if the window is closed (returns tre or false)
// window.closed;

// stop() - Stops the window loading
// window.stop();

// alert() - Opens a modal
// alert("Hello World!");

// print() - Opens the print window
// print();

// prompt() - Opens a prompt and returns a string
// let myPrompt = prompt();
// console.log(myPrompt);

// confirm() - Opens a confirmation modal (returns true or false)
// let res = confirm("Are you sure?");
// console.log(res);

// screen - Works on the window and has several properties
const screen = window.screen;
console.log(screen);

// vailHeight o height - Returns the height of the window
console.log(window.screen.availHeight, window.screen.height);

// vailWidth o width - Returns the height of the window
console.log(window.screen.availWidth, window.screen.width);

// screenRight - Retuns the distance between the border left of the window and the border left of the computer screen
const screenLeft = window.screenLeft;
console.log(screenLeft);

// screenRight - Retuns the distance between the border left of the window and the border left of the computer screen
const screenTop = window.screenTop;
console.log(screenTop);

// scrollX - Returns the number of px the document is currently scrolling on the X axis
const scrollX = window.scrollX;
console.log(scrollX);

// scrollY - Returns the number of px the document is currently scrolling on the Y axis
const scrollY = window.scrollY;
console.log(scrollY);

// scroll () - Scrolls to the indicated part of the page
// window.scroll(0, 100);

// location.href - Returns the page´s location
const href = window.location.href;
console.log(href);

// location.hostname - Returns the hostname name of the page
const hostname = window.location.hostname;
console.log(hostname);

// location.pathname - Returns the domain´s pathname where we are
console.log(location.pathname);

// location.protocol - Returns the protocol of the page
console.log(window.location.protocol);

// // location.assign() - Loads another document
// location.assign("https://youtube.com");

// *************************************************************************************************
// events *****************************************************************************************

// click event
const $button = document.querySelector(".my-button");

// $button.addEventListener("click", () => {
// 	alert("Click");
// });

// $button.addEventListener("click", greeting);

// function greeting(e) {
// 	alert("Hello!");
// 	$button.removeEventListener("click", greeting);
// 	console.log(e);
// }

// dblclick event (double click)
$button.addEventListener("dblclick", (e) => {
	alert("Double click!");
});

// mouseover event (causes effect on the children elements)
const $container1 = document.querySelector(".container-1"),
	$container2 = document.querySelector(".container-2");

// $container1.addEventListener("mouseover", () => {
// 	alert("Mouseover!");
// });

// mouseout event (causes effect on the children elements)

// $container1.addEventListener("mouseout", (e) => {
// 	alert("Mouseout!");
// });

// contextmenu event (when you click the right button on any element to open the context menu)
// $container2.addEventListener("contextmenu", () => {
// 	alert("Context menu!");
// });

// mousedown event
// $container1.addEventListener("mousedown", (e) => {
// 	alert("Mousedown!");
// });

// mouseup event
$container1.addEventListener("mouseup", (e) => {
	alert("Mouseup!");
});
