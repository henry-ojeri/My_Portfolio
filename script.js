const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

        });

    });


    document.addEventListener("click", function (event) {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

        }

    });

}



const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = contactForm.querySelector('input[type="text"]').value.trim();

        const emailInput = contactForm.querySelector('input[type="email"]');

        const email = emailInput.value.trim();

        const message = contactForm.querySelector("textarea").value.trim();


        if (!name || !email || !message) {

            alert("Please fill in all fields.");

            return;

        }


        if (!emailInput.checkValidity()) {

            alert("Please enter a valid email address.");

            return;

        }


        const subject = encodeURIComponent(
            "Portfolio enquiry from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


        const mailtoLink =
            "mailto:ojerihenry@gmail.com?subject=" +
            subject +
            "&body=" +
            body;

        window.location.href = mailtoLink;

    });

}
