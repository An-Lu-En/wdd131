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
} 


// Wind Chill Logic
const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

// Wind Chill Formula (Celsius)
function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  ).toFixed(1);
}

const windChillEl = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  windChillEl.textContent = "N/A";
}
