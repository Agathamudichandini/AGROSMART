// Select the language dropdown
const languageSelect = document.getElementById("languageSelect");

// Function to load JSON file for the selected language
async function loadLanguage(lang) {
    try {
        // Construct file path based on selected language
        const response = await fetch(`${lang}.json`);
        const json = await response.json();
        const data = json.data;

        // Select all elements with data-key
        const elements = document.querySelectorAll("[data-key]");
        elements.forEach(el => {
            const key = el.getAttribute("data-key");
            if (data[key]) {
                // Replace text content
                el.innerText = data[key];
            }
        });
    } catch (err) {
        console.error("Error loading language file:", err);
    }
}

// Event listener for dropdown change
languageSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value; // "en" or "te"
    loadLanguage(selectedLang);
});

// Load default language on page load
window.addEventListener("DOMContentLoaded", () => {
    loadLanguage(languageSelect.value);
});