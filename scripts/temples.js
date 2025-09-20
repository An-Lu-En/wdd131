// getdates.js

// Set current year dynamically
const yearSpan = document.getElementById("currentyear");
const today = new Date();
yearSpan.textContent = today.getFullYear();

// Set last modified date dynamically
const lastModifiedParagraphs = document.querySelectorAll("footer p");
if (lastModifiedParagraphs.length > 1) {
    lastModifiedParagraphs[1].textContent = "Last Modified: " + document.lastModified;
    
  // alert("This page has changed!");
  

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation._______.toggle("_______");
	hamButton.classList.toggle("open");
});

}

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
// function toggleMenu() {
//   const nav = document.getElementById("navLinks");
//   nav.toggle("show");
  
  
// } 



// const hamburger = document.getElementById("hamburger");
//     const navLinks = document.getElementById("nav-links");

// hamburger.addEventListener("click", () => {
//   nav.toggle("active");
// });
//   // Toggle between ☰ and X
//   if (hamburger.textContent === "☰") {
//     hamburger.textContent = "✖";
//   } else {
//     hamburger.textContent = "☰";
//   }

//     const menuButton = document.querySelector("#menu");
// const nav = document.querySelector("nav");

// menuButton.addEventListener("click", () => {
//   nav.style.display = nav.style.display === "flex" ? "none" : "flex";
//   menuButton.textContent = menuButton.textContent === "✖" ? "☰" : "✖";
// });