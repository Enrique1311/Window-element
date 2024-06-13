const students = [
	{ name: "Carolina", email: "caro@gmail.com", subject: "Mathmatics" },
	{ name: "Martina", email: "martu@gmail.com", subject: "Language" },
	{ name: "Santiago", email: "santi@gmail.com", subject: "Mathmatics" },
	{ name: "Enrique", email: "enri@gmail.com", subject: "Mathmatics" },
	{ name: "Carlos", email: "carlos@gmail.com", subject: "Language" },
	{ name: "Amalia", email: "amalia@gmail.com", subject: "Language" },
];

const $gridContainer = document.querySelector(".grid-container");

students.forEach((student) => {
	let htmlCode = `
    			<h3 class="grid-item">${student.name}</h3>
			<p class="grid-item">${student.email}</p>
			<p class="grid-item">${student.subject}</p>
			<div class="grid-item">
				<select
					name=""
					id=""
				>
					<option>Week 1</option>
					<option>Week 2</option>
				</select>
			</div>
    `;

	$gridContainer.innerHTML += htmlCode;
});
