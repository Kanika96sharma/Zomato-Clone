// Hero Elements
const heroImage = document.querySelector("main section img");
const heading = document.querySelector("main section p");
const searchBox = document.querySelector("main section input");
const header = document.querySelector("header");

// Page Load Animation
window.addEventListener("load", () => {

    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateY(-40px)";

    heading.style.opacity = "0";
    heading.style.transform = "translateY(30px)";

    searchBox.style.opacity = "0";
    searchBox.style.transform = "scale(0.8)";

    setTimeout(() => {
        heroImage.style.transition = "1s";
        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        heading.style.transition = "1s";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
    }, 700);

    setTimeout(() => {
        searchBox.style.transition = "1s";
        searchBox.style.opacity = "1";
        searchBox.style.transform = "scale(1)";
    }, 1200);

});

// Search Box Focus Animation
searchBox.addEventListener("focus", () => {

    searchBox.style.boxShadow = "0 0 20px #e23744";
    searchBox.style.transform = "scale(1.03)";

});

searchBox.addEventListener("blur", () => {

    searchBox.style.boxShadow = "none";
    searchBox.style.transform = "scale(1)";

});

// Search on Enter
searchBox.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        e.preventDefault();

        if (searchBox.value.trim() !== "") {
            alert("Searching for: " + searchBox.value);
        } else {
            alert("Please enter a restaurant or dish.");
        }
    }

});

// Header Color Change on Scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#c71c35";
        header.style.transition = "0.4s";

    } else {

        header.style.background = "#e23744";

    }

});

// Navigation Hover Animation
const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "0.3s";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });

    // Investor Cards Animation

    const investorCards = document.querySelectorAll(".investor-info .card");

    // Initial State
    investorCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
    });

    // Reveal on Scroll
    const revealCards = () => {

        investorCards.forEach((card, index) => {

            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 100) {

                setTimeout(() => {

                    card.style.transition = "all 0.8s ease";
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, index * 250);
            }

        });

    };

    // Run on Page Load
    window.addEventListener("load", revealCards);

    // Run While Scrolling
    window.addEventListener("scroll", revealCards);

    // Hover Animation

    investorCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.03)";
            card.style.boxShadow = "0 18px 35px rgba(226,55,68,0.35)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";

        });

    });

    // LOGIN PAGE 

    const loginBox = document.querySelector(".login-box");

    if (loginBox) {

        loginBox.style.opacity = "0";
        loginBox.style.transform = "translateY(60px)";

        window.addEventListener("load", () => {

            setTimeout(() => {

                loginBox.style.transition = "1s";
                loginBox.style.opacity = "1";
                loginBox.style.transform = "translateY(0)";

            }, 300);

        });

    }

    // SIGN UP PAGE

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {

                alert("Passwords do not match!");
                return;

            }

            alert("Account Created Successfully!");

            signupForm.reset();

        });

    }

    // Add Restaurant

    const restaurantForm = document.getElementById("restaurantForm");

    if (restaurantForm) {

        restaurantForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const restaurantName = document.getElementById("restaurantName").value;

            alert(
                restaurantName +
                " has been registered successfully!"
            );

            restaurantForm.reset();

        });

    }

});