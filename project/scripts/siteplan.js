// --- BBEM Technical Limited Site Plan Logic Engine ---

const YearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();

if (YearElement) {
    YearElement.textContent = currentYear;
}

const updateElement = document.getElementById("lastModified");
const lastUpdated = document.lastModified;

if (updateElement){
    updateElement.textContent = "last modified   " + lastUpdated; 
}
document.addEventListener("DOMContentLoaded", () => {
  displaySitePlanMetadata();
});

/**
 * Grabs document diagnostics and handles text updates
 * inside the planning document sections using template literals.
 */
function displaySitePlanMetadata() {
  const logContainer = document.getElementById("log-timestamp");
  const footerContainer = document.getElementById("plan-modified");
  
  // Capture current date timestamps cleanly
  const currentTimestamp = document.lastModified;
  
  // Dynamic string generation using exclusive Template Literals
  const updateMessage = `Planning manifest verified. Structural data context was pulled successfully.`;
  const modifiedMessage = `Last Structural Verification: ${currentTimestamp}`;
  
  // Inject text values safely into the DOM nodes
  if (logContainer) {
    logContainer.textContent = updateMessage;
  }
  
  if (footerContainer) {
    footerContainer.textContent = modifiedMessage;
  }
}