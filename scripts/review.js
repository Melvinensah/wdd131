document.addEventListener("DOMContentLoaded", () => {
    // Get the current counter from localStorage, default to 0 if it doesn't exist
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    
    // Increment the counter because a new form was successfully submitted
    reviewCount++;
    
    // Save the updated counter back to localStorage
    localStorage.setItem("reviewCount", reviewCount);
    
    // Display the updated counter on the screen
    document.getElementById("reviewCount").textContent = reviewCount;
});