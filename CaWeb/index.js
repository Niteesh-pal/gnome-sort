const container = document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {

// For loop to generate 20 bars
for (let i = 0; i < num; i += 1) {
	
	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;

	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;
	
	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;

	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar__id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	barLabel.style.color="white";

	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}

// Asynchronous function to perform "Gnome Sort"
async function CombSort(delay = 600) {
let bars = document.querySelectorAll(".bar");

var pos = 0;

while (pos < 20) {
	if (pos == 0) {
	pos++;
	}

	// Assigning value of posth bar into value1
	var value1 = parseInt(bars[pos].childNodes[0].innerHTML);
		bars[pos].style.backgroundColor= "green";

	// Assigning value of pos-1th bar into value1
	var value2 = parseInt(bars[pos - 1].childNodes[0].innerHTML);
		bars[pos - 1].style.backgroundColor= "green";

	// Comparing value1 and value2
	if (value1 >= value2) {
	pos++;
	} else {
	
	// Provide red color to the posth bar
	bars[pos].style.backgroundColor = "red";

	// Provide red color to the pos-1th bar
	bars[pos - 1].style.backgroundColor = "red";

	// Swap posth bar with (pos-1)th bar
	var temp1 = bars[pos].style.height;
	var temp2 = bars[pos].childNodes[0].innerText;

	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	// Swap posth bar with (pos-1)th bar
	bars[pos].style.height = bars[pos - 1].style.height;
	bars[pos].childNodes[0].innerText =
			bars[pos - 1].childNodes[0].innerText;
	bars[pos - 1].style.height = temp1;
	bars[pos - 1].childNodes[0].innerText = temp2;
	pos--;
	}

	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);

	// Providing skyblue color
	for (var x = 0; x < 20; x++) {
	bars[x].style.backgroundColor = "rgb(0, 183, 255)";
	}
}

// Providing lightgreen color
for (var x = 0; x < 20; x++) {
	bars[x].style.backgroundColor = "rgb(49, 226, 13)";
}

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Gnome Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Call "generatebars()" function
generatebars();

// Function to generate new random array
function generate() {
window.location.reload();
}

// Function to disable the button
function disable() {

// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Gnome Sort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
