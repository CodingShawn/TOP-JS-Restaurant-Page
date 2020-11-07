import createContactPage from "./contact";

const createMenuPage = (parentElement) => {
    const divWrapper = document.createElement("div");
    const header = document.createElement("h2");
    header.textContent = "Menu"

    const menuWrapper = document.createElement("ul");
    for (let i=0; i < 5; i ++) {
        let menuLine = document.createElement("li");
        menuWrapper.appendChild(menuLine);
    }

    menuWrapper.childNodes[0].textContent = "Big Mac";
    menuWrapper.childNodes[1].textContent = "Cheeseburger";
    menuWrapper.childNodes[2].textContent = "Apple pie";
    menuWrapper.childNodes[3].textContent = "Chocolate sundae";
    menuWrapper.childNodes[4].textContent = "Mcflurry";

    divWrapper.appendChild(header);
    divWrapper.appendChild(menuWrapper);
    parentElement.appendChild(divWrapper);
};

export default createMenuPage;