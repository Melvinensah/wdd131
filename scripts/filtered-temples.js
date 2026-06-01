const temples = [

   {
    templeName: "Sierra Leone Freetown Temple",
    location: "Freetown, Sierra Leone",
    dedicated: "2027, April, 6",
    area: 11736,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/freetown-sierra-leone-temple/freetown-sierra-leone-temple-24087-main.jpg"
  },
 
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
  },

];

// Target DOM nodes globally
const galleryContainer = document.querySelector(".gallery-container");

function displayTemples(filteredTemples) {
  if (!galleryContainer) return;
  galleryContainer.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" 
           alt="The beautiful ${temple.templeName}" 
           loading="lazy" 
           width="400" 
           height="250"
           onerror="this.onerror=null; this.src='https://placehold.co/400x250?text=Image+Unavailable';">
    `; // Note: Added 'onerror' fallback just in case Church server hotlinking cuts out!

    galleryContainer.appendChild(card);
  });
}

function handleFilter(category) {
  let filteredList = [];

  switch (category.toLowerCase()) {
    case "old":
      filteredList = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
      });
      break;
    case "new":
      filteredList = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
      });
      break;
    case "large":
      filteredList = temples.filter(temple => temple.area > 90000);
      break;
    case "small":
      filteredList = temples.filter(temple => temple.area < 10000);
      break;
    case "home":
    default:
      filteredList = temples;
      break;
  }
  displayTemples(filteredList);
}

// --- SINGLE DOM CONTENT LOADED EVENT ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Render
  displayTemples(temples);

  // 2. Setup Navigation Filters
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const selection = event.target.textContent.trim();
      handleFilter(selection);
    });
  });

  // 3. Hamburger Interaction
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      if (navMenu.classList.contains("open")) {
        menuBtn.innerHTML = "&#10006;"; // 'X'
      } else {
        menuBtn.innerHTML = "&#9776;";  // '☰'
      }
    });
  }

  // 4. Footer Date Trackers
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedParagraph = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
  }
});