import createLandingPage from './landingpage.js';
import createContactPage from './contact.js';
import createMenuPage from './menu.js'
import createTabs from './tab.js' 

let loadPage = (() => {
    let content = document.getElementById("content");
    let tabs = createTabs("Home", "Menu", "Contact")
    content.appendChild(tabs);

    let displayedContent = document.createElement("div");
    content.appendChild(displayedContent);
    createLandingPage(displayedContent)


    const changeTab = (pageLoadFunction) => {
        displayedContent.textContent = "";
        pageLoadFunction(displayedContent);
    }

    tabs.addEventListener('click', (e) => {
        if (e.target.textContent === "Home") {
            changeTab(createLandingPage);
        } else if (e.target.textContent === "Menu") {
            changeTab(createMenuPage);
        } else if (e.target.textContent === "Contact") {
            changeTab(createContactPage);
        }
    })
})();