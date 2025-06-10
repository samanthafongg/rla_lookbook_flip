/*********************
* RESPONSIVE WARNING *
*********************/

const responsiveWarning = document.getElementById("responsive-warning");
// "true" if the site is optimized for responsive design, "false" if not.
const responsiveDesign = false;

// Show mobile warning if the user is on mobile and responsive-design is false.
if (!responsiveDesign && window.innerWidth <= 768) {
	responsiveWarning.classList.add("show");
}


/***********************
* MODE TOGGLE BEHAVIOR *
***********************/

// Get elements that change with the mode.
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const portfolioLink = document.getElementById("portfolio-link");
const body = document.body;

// Function to apply mode.
function applyMode(mode) {
	body.classList.remove("light-mode", "dark-mode");
	body.classList.add(mode);

	if (mode === "dark-mode") {
		// Set dark mode styles.
		toggleModeBtn.style.color = "rgb(245, 245, 245)";
		toggleModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

		portfolioLink.style.color = "rgb(245, 245, 245)";

		responsiveWarning.style.backgroundColor = "rgb(2, 4, 8)";
	} else {
		// Set light mode styles.
		toggleModeBtn.style.color = "rgb(2, 4, 8)";
		toggleModeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';

		portfolioLink.style.color = "rgb(2, 4, 8)";

		responsiveWarning.style.backgroundColor = "rgb(245, 245, 245)";
	}
}

// Check and apply saved mode on page load
let savedMode = localStorage.getItem("mode");

if (savedMode === null) {
	savedMode = "light-mode"; // Default mode.
}
applyMode(savedMode);

// Toggle mode and save preference.
toggleModeBtn.addEventListener("click", function () {
	let newMode;

	if (body.classList.contains("light-mode")) {
		newMode = "dark-mode";
	} else {
		newMode = "light-mode";
	}

	applyMode(newMode);

	// Save choice.
	localStorage.setItem("mode", newMode);
});

/***************************
* CLOSE BOOK FROM PAGE 7 *
***************************/

// When page 7 is clicked, close the book by unchecking all checkboxes.
const closeOnPage7 = document.getElementById("page7_checkbox");

// List of all flipbook checkboxes to uncheck
const flipbookCheckboxes = [
	document.getElementById("cover_checkbox"),
	document.getElementById("page1_checkbox"),
	document.getElementById("page2_checkbox"),
	document.getElementById("page3_checkbox"),
	document.getElementById("page4_checkbox"),
	document.getElementById("page5_checkbox"),
	document.getElementById("page6_checkbox"),
	document.getElementById("page7_checkbox"),
	document.getElementById("page8_checkbox"),
	document.getElementById("backcover_checkbox")
];

// Close the book when page 7 is flipped
closeOnPage7.addEventListener("change", function () {
	if (this.checked) {
		setTimeout(() => {
			flipbookCheckboxes.forEach(checkbox => checkbox.checked = false);
		}, 800); // Delay allows flip animation to complete before resetting
	}
});

