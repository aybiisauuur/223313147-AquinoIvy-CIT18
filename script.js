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
        const projectsSection = document.getElementById("projects");
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

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
  
    const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animation); // Add animation class
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    };
  
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  
    document.querySelectorAll("[data-animation]").forEach(element => {
      observer.observe(element);
    });
  });
  
  

  document.addEventListener("DOMContentLoaded", function () {
    // Select the projects section and its elements
    const projectsSection = document.querySelector('.projects-section');
    const sectionHeader = document.querySelector('.section-header');
    const projectCards = document.querySelectorAll('.project-card');
  
    // Define the options for the Intersection Observer
    const observerOptions = {
      root: null, // Observe from the viewport
      rootMargin: "0px", // Trigger when the section reaches the viewport
      threshold: 0.5 // Trigger when 50% of the section is visible
    };
  
    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate' class to trigger the animations
          projectsSection.classList.add('animate');
          sectionHeader.classList.add('animate');
          projectCards.forEach(card => {
            card.classList.add('animate');
          });
          observer.unobserve(entry.target); // Stop observing once the animation triggers
        }
      });
    };
  
    // Create the observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Start observing the projects section
    observer.observe(projectsSection);
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Select the contact section and its elements
    const contactSection = document.querySelector('.contact-section');
    const contactContainer = document.querySelector('.contact-container');
    const contactHeading = document.querySelector('.contact-heading');
    const contactDescription = document.querySelector('.contact-description');
  
    // Define the options for the Intersection Observer
    const observerOptions = {
      root: null, // Observe from the viewport
      rootMargin: "0px", // Trigger when the section reaches the viewport
      threshold: 0.5 // Trigger when 50% of the section is visible
    };
  
    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate' class to trigger the animations
          contactSection.classList.add('animate');
          contactContainer.classList.add('animate');
          contactHeading.classList.add('animate');
          contactDescription.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once the animation triggers
        }
      });
    };
  
    // Create the observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Start observing the contact section
    observer.observe(contactSection);
  });
  