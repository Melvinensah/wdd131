// --- 1. Project Database (Local Workspace Assets & Specific Service Mapping) ---
const projectData = [
  {
    title: "Commercial & Industrial Electrical Installations",
    category: "Electrical",
    image: "images/electrical.webp"
  },
  {
    title: "Central Commercial Plumbing Infrastructure Systems",
    category: "Mechanical",
    image: "images/plumbing.webp"
  },
  {
    title: "Industrial Facility HVAC Plant Matrix",
    category: "Mechanical",
    image: "images/hvac.webp"
  },
  {
    title: "Integrated ELV Systems (CCTV, Internet Connectivity, Fire Alarm, Audio Visual)",
    category: "Low-Voltage",
    image: "images/cctv.webp"
  }
];

// --- 2. Centralized DOM Initialization Engine ---
document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();
  displayRequiredFooterData(); // Safe execution for required footer elements

  // Selective initialization depending on active page context node
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
    const cardMarkup = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-info">
          <span class="project-tag">${project.category}</span>
          <h3>${project.title}</h3>
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

// --- 7. Required Copyright & Modification Metadata Injector ---
function displayRequiredFooterData() {
  const currentYearSpan = document.getElementById("currentyear");
  const lastModifiedParagraph = document.getElementById("lastModified");

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
  }
}