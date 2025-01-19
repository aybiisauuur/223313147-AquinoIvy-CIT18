document.addEventListener("DOMContentLoaded", () => {
    // Add click listeners to navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Add click listener to "Go to Projects" button
    const projectsButton = document.getElementById("projectsButton");
    projectsButton.addEventListener("click", () => {
        const projectsSection = document.getElementById("#projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    const logoButton = document.getElementById("logo");
    logoButton.addEventListener("click", () => {
        const home = document.getElementById("home");

        if (home) {
            home.scrollIntoView({ behavior: "smooth"});
        }
    });
});
