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