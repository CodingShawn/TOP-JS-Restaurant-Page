
const createLandingPage = (parentElement) => {
    const header = document.createElement("h1");
    header.textContent = "Macdonald's";
    parentElement.appendChild(header);
    
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    img.src = "../assets/macs.jpg";
    imgWrapper.appendChild(img);
    parentElement.appendChild(imgWrapper);

    const copy = document.createElement("div");
    copy.textContent = "Macdonald's - bringing a smile to people one Happy Meal at a time"
    parentElement.appendChild(copy);
};

export default createLandingPage;