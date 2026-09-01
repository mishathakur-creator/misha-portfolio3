/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

    });


    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

        });

    });

}


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

if (filterButtons.length && portfolioItems.length) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            /* Remove active state */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            /* Add active state */

            button.classList.add("active");


            /* Filter projects */

            portfolioItems.forEach(item => {

                const category = item.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {

    element.textContent = new Date().getFullYear();

});
