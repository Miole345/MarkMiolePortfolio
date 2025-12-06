// ========================
// DARK/LIGHT MODE TOGGLE
// ========================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Elements affected by font color changes
const contrastDarkElements = document.querySelectorAll('.ContrastToDark1');
const contrastLightElements = document.querySelectorAll('.ContrastToLight2');
const contrastAccentElement = document.getElementById('ContrastToLight1');

// Initial theme
let darkMode = true;

// Function to switch colors for light mode
function enableLightMode() {
    body.style.backgroundColor = '#f0f0f0'; // Light background
    body.style.color = '#1e1e1e';           // Default text color

    // Dark grey font for elements with .ContrastToDark1
    contrastDarkElements.forEach(el => {
        el.style.color = '#1e1e1e';
    });

    // Light blue font for elements with .ContrastToLight2
    contrastLightElements.forEach(el => {
        el.style.color = '#cce7ff';
    });

    // Accent blue for element with #ContrastToLight1
    if (contrastAccentElement) {
        contrastAccentElement.style.color = '#80d0ff';
    }

    darkMode = false;
}

// Function to switch colors for dark mode
function enableDarkMode() {
    body.style.backgroundColor = '#1e1e1e'; // Dark background
    body.style.color = '#cce7ff';           // Default text color

    // Reset element colors to match dark mode
    contrastDarkElements.forEach(el => {
        el.style.color = '#cce7ff';
    });

    contrastLightElements.forEach(el => {
        el.style.color = '#cce7ff';
    });

    if (contrastAccentElement) {
        contrastAccentElement.style.color = '#80d0ff';
    }

    darkMode = true;
}

// Event listener for toggle button
themeToggle.addEventListener('click', () => {
    if (darkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// ========================
// CONTACT FORM SUBMISSION (placeholder behavior)
// ========================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    alert('Thank you for your message! (Form submission placeholder)');
    contactForm.reset(); // reset form fields
});
