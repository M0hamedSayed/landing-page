/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const allSections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar__list");
const frag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function createElement(tag, attributes, textContent, cb) {
    const ele = document.createElement(tag);
    const keys = Object.keys(attributes);
    for (key of keys) {
        ele.setAttribute(key, attributes[key])
    }

    ele.textContent = textContent;

    cb(ele)
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
allSections.forEach(sec => {
    const dataNav = sec.getAttribute("data-nav");
    createElement(
        'li',
        {
            class: 'list',
        },
        '',
        (list) => {
            createElement(
                'a',
                {
                    class: 'menu__link',
                    style: 'cursor: pointer'
                },
                dataNav,
                (link => {
                    list.appendChild(link);
                })
            )
            list.addEventListener("click", () => {
                sec.scrollIntoView({ behavior: "smooth" });
            });
            frag.appendChild(list);

        }
    )

})

// build the nav
nav.appendChild(frag);

// Scroll to section on link click
window.addEventListener("scroll", () => {
    allSections.forEach((sec) => {
        rect = sec.getBoundingClientRect();
        if (rect.top >= -50 && rect.top <= 250) {
            // Add class 'active' to section when near top of viewport
            sec.classList.add('your-active-class');
            let activeNav = sec.getAttribute('data-nav');
            const allNav = document.querySelectorAll(".menu__link");
            allNav.forEach((list) => {
                if (list.textContent == activeNav) {
                    // Add an active state to your navigation items when a section is in the viewport
                    list.classList.add('active_nav');
                } else {
                    list.classList.remove('active_nav');
                }
            })
        } else {
            sec.classList.remove('your-active-class');

        }
    })
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 


// Set sections as active