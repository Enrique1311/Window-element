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
	$container2 = document.querySelector(".container-2"),
	$myInput = document.querySelector(".my-input"),
	$myImage = document.querySelector(".my-image");

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
// $container1.addEventListener("mouseup", (e) => {
// 	alert("Mouseup!");
// });

// keydown event
// $myInput.addEventListener("keydown", (e) => {
// 	console.log("This is a Keydown!");
// });

// keypress event
// $myInput.addEventListener("keypress", (e) => {
// 	console.log("This is a Keypress!");
// });

// keyup event
// $myInput.addEventListener("keyup", (e) => {
// 	console.log("This is a Keydup!");
// });

// ********************************************************************
// Interfaz events ****************************************************

// error event (When an error occurs during the loading process of an multimedia file: img or video)
// $myImage.addEventListener("error", (e) => {
// 	alert("An error has occurred!");
// });

// load event
window.addEventListener("load", () => {
	console.log("The site has loaded!");
});

// beforeunload event (Before you are going to leave the site)
window.addEventListener("beforeunload", () => {
	console.log("You are going to leave this site!");
});

// unload event (When you are going to leave the site)
window.addEventListener("unload", () => {
	console.log("You are going to leave this site!");
});

// resize event
// window.addEventListener("resize", () => {
// 	alert("The screen has been resized!");
// });

// scroll event
window.addEventListener("scroll", () => {
	console.log("A scroll event has ocurred!");
});

// select event (for inputs and textareas)
let $selectedText = document.querySelector(".selected-text");

$myInput.addEventListener("select", (e) => {
	console.log(
		`The selection starts at the caracter position number: ${e.target.selectionStart}`
	);
	console.log(
		`The selection ends at the caracter position number: ${e.target.selectionEnd}`
	);

	let start = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let inputText = $myInput.value;

	$selectedText.innerHTML = inputText.substring(start, end);
});

// setTimeout
const timer = setTimeout(() => {
	document.write("Hello!");
}, 2000);

// clearTimeout
clearTimeout(timer);

// setInterval
const interval = setInterval(() => {
	document.write("Hello!");
}, 1000);

// clearInterval
clearInterval(interval);
