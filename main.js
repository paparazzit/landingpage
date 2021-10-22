let aboutUsBtn = document.querySelector("#aboutBtn");
let radioniceBtn = document.querySelector("#radioniceBtn");
let visitBtn = document.querySelector("#visitBtn");

let sections = document.querySelector(".section");
let radioniceSection = document.querySelector("#radionice");
let mapSection = document.querySelector("#map");

let aboutSection = document.querySelector("#aboutus");

aboutUsBtn.addEventListener("click", showAbout);

radioniceBtn.addEventListener("click", showRadionice);
visitBtn.addEventListener("click", showMap);

function showAbout(e) {
	e.preventDefault();
	aboutSection.style.transform = "translateX(0)";
	radioniceSection.style.transform = "translateX(150%)";
	mapSection.style.transform = "translateX(-150%)";
}
function showRadionice(e) {
	e.preventDefault();
	aboutSection.style.transform = "translateX(-150%)";
	radioniceSection.style.transform = "translateX(0%)";
	mapSection.style.transform = "translateX(-150%)";
}
function showMap(e) {
	aboutSection.style.transform = "translateX(-150%)";
	radioniceSection.style.transform = "translateX(150%)";
	mapSection.style.transform = "translateX(0%)";
}
