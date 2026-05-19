// const YearElement = document.getElementById("currentyear");
// const currentYear = new Date().getFullYear();

// if (YearElement) {
//     YearElement.textContent = currentYear;
// }

// const updateElement = document.getElementById("lastModified");
// const lastUpdated = document.lastModified;

// if (updateElement){
//     updateElement.textContent = "last modified   " + lastUpdated; 
// }

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Responsive Hamburger Interaction ---
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
        // Toggle view class inside navigation
        navMenu.classList.toggle("open");
        
        // Check state to switch button character symbol safely 
        if (navMenu.classList.contains("open")) {
            menuBtn.innerHTML = "&#10006;"; // Displays 'X' (Close symbol)
        } else {
            menuBtn.innerHTML = "&#9776;";  // Displays '☰' (Hamburger symbol)
        }
    });

    // --- 2. Automated Copyright & Modification Trackers ---
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    // Output current system year dynamically
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Output document modification context metadata
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});