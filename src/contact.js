const createContactPage = (parentElement) => {
    const divWrapper = document.createElement("div");
    
    const header = document.createElement("h2");
    header.textContent = "We look forward to hearing from you!";
    
    const contactDiv = document.createElement("div");
    contactDiv.textContent = "You can reach us at macs@macdonalds.com for any feedback";
    
    divWrapper.appendChild(header);
    divWrapper.appendChild(contactDiv);

    parentElement.appendChild(divWrapper);
};

export default createContactPage;