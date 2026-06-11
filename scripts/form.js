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
// Product Data Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    // Populate the select element options
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Using ID as value per standard data practices
        option.textContent = product.name; // Displaying product name
        productSelect.appendChild(option);
    });
});