const students = [
	{ name: "Carolina", email: "caro@gmail.com", subject: "Mathmatics" },
	{ name: "Martina", email: "martu@gmail.com", subject: "Language" },
	{ name: "Santiago", email: "santi@gmail.com", subject: "Mathmatics" },
	{ name: "Enrique", email: "enri@gmail.com", subject: "Mathmatics" },
	{ name: "Carlos", email: "carlos@gmail.com", subject: "Language" },
	{ name: "Amalia", email: "amalia@gmail.com", subject: "Language" },
];

const $gridContainer = document.querySelector(".grid-container"),
	$button = document.querySelector("button");

students.forEach((student) => {
	let htmlCode = `
    			<h3 class="grid-item">${student.name}</h3>
			<p class="grid-item">${student.email}</p>
			<p class="grid-item">${student.subject}</p>
			<div class="grid-item week">
				<select
					class="choosen-week"
				>
					<option value="Week 1">Week 1</option>
					<option value="Week 2">Week 2</option>
				</select>
			</div>
    `;

	$gridContainer.innerHTML += htmlCode;
});

$button.addEventListener("click", () => {
	let $elements = document.querySelectorAll(".week"),
		$choosenWeeks = document.querySelectorAll(".choosen-week");

	// console.log($elements, $choosenWeeks);

	// $elements.forEach((el) => {
	// 	el.innerHTML = $choosenWeeks[el].value;
	// });

	for (el in $elements) {
		let week = $elements[el];
		week.innerHTML = $choosenWeeks[el].value;
	}
});
