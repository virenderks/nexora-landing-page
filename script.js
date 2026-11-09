
// ========================================
// MOBILE NAVIGATION MENU
// ========================================

// Select the menu button and navigation
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

// Check whether both elements exist
if (menuToggle && navigation) {

    // Function to open or close the menu
    function toggleMenu() {

        // Check whether the menu is currently open
        const isOpen = navigation.classList.contains("active");

        // Add or remove the active class
        navigation.classList.toggle("active", !isOpen);

        // Update accessibility information
        menuToggle.setAttribute("aria-expanded", String(!isOpen));

        // Update button label
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation menu" : "Close navigation menu"
        );
    }

    // Open or close menu when button is clicked
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu after clicking a navigation link
    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });

    // Close menu when Escape key is pressed
    document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
});

    // Close mobile menu when switching to desktop width
    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) {
            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    });
}
