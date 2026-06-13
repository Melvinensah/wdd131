// --- 2. Automated Copyright & Modification Trackers ---
const currentYearSpan = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");

// Output current system year dynamically
if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
}

// Output document modification context metadata
if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

// --- 1. Architectural Project Database (Updated Domain-Specific Material) ---
const projectData = [
  {
    title: "Central Commercial Switchgear Matrix",
    category: "Electrical",
    location: "Freetown Site Alpha",
    year: 2025,
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80" // High-voltage industrial panel
  },
  {
    title: "Industrial Plant Chiller Loop Integration",
    category: "Mechanical",
    location: "Kono Logistics Center",
    year: 2025,
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80" // Large commercial HVAC/Chiller units
  },
  {
    title: "High-Security CCTV IP Server Node",
    category: "Low-Voltage",
    location: "Corporate HQ Hub",
    year: 2026,
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&w=600&q=80" // Security camera system installation
  },
  {
    title: "Multi-Zone Automated Fire Suppression Array",
    category: "Low-Voltage",
    location: "Industrial Complex West",
    year: 2024,
    image: "https://images.unsplash.com/photo-1596753106198-d1a1b8cf0f23?auto=format&fit=crop&w=600&q=80" // Industrial fire alarm control panel matrix
  }
];
// --- 2. Centralized DOM Initialization Engine ---
document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();
  displayLastModified();

  // Defensive execution checks determine page context dynamically
  const galleryBox = document.getElementById("gallery-container");
  if (galleryBox) {
    renderGalleryCards(projectData);
    initializeGalleryFilters();
  }

  const contactForm = document.getElementById("consultation-form");
  if (contactForm) {
    initializeFormTracker();
  }
});

// --- 3. Responsive Navigation Toggle ---
function initializeMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// --- 4. Gallery Dynamic Card Rendering (Template Literals & Native Lazy Loading) ---
function renderGalleryCards(filteredArray) {
  const container = document.getElementById("gallery-container");
  if (!container) return;
  container.innerHTML = ""; 

  filteredArray.forEach(project => {
    // Standard template literal card generation using full headers, paragraphs, and images
    const cardMarkup = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-info">
          <span class="project-tag">${project.category}</span>
          <h3>${project.title}</h3>
          <p><strong>Location Site:</strong> ${project.location}</p>
          <p><strong>Deployment Year:</strong> ${project.year}</p>
        </div>
      </div>
    `;
    container.innerHTML += cardMarkup;
  });
}

// --- 5. Gallery Sorting Filter Array Logic ---
function initializeGalleryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");

      const criteria = e.target.getAttribute("data-filter");

      if (criteria === "all") {
        renderGalleryCards(projectData);
      } else {
        const derivedSubset = projectData.filter(project => project.category === criteria);
        renderGalleryCards(derivedSubset);
      }
    });
  });
}

// --- 6. Form Submission Tracker (localStorage Maintenance) ---
function initializeFormTracker() {
  const formElement = document.getElementById("consultation-form");
  const counterDisplay = document.getElementById("submission-counter");
  const successBox = document.getElementById("form-success-msg");

  if (!formElement || !counterDisplay) return;

  let inquiryCount = parseInt(localStorage.getItem("bbemInquiryCount")) || 0;
  counterDisplay.textContent = `You have submitted ${inquiryCount} project inquiries during this session.`;

  formElement.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const applicantName = document.getElementById("fullName").value;
    const requestedDomain = document.getElementById("serviceType").value;

    inquiryCount++;
    localStorage.setItem("bbemInquiryCount", inquiryCount);

    counterDisplay.textContent = `You have submitted ${inquiryCount} project inquiries during this session.`;
    
    successBox.textContent = `Thank you, ${applicantName}. Your ticket regarding '${requestedDomain} Systems' has been logged with BBEM Technical Limited.`;
    successBox.classList.remove("hidden");

    formElement.reset(); 
  });
}

// --- 7. Last Modified Timestamp Utility ---
function displayLastModified() {
  const modDisplay = document.getElementById("last-modified");
  if (modDisplay) {
    modDisplay.textContent = `Last Modified: ${document.lastModified}`;
  }
}