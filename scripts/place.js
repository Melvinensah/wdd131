document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Elements
    const currentYearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified-date");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // 2. Weather Wind Chill Logic
    // Parsing programmatic static data from layout elements
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");

    if (tempElement && windElement && windChillElement) {
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent);

        // Standard Metric limits validator check: Temp <= 10°C AND Wind > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            const chillFactor = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${chillFactor.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});

/**
 * Calculates Metric Wind Chill Factor based on Environment Variables
 * @param {number} t - Temperature in Celsius
 * @param {number} v - Wind Speed in km/h
 * @returns {number} Calculated Wind Chill index
 */
function calculateWindChill(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
}