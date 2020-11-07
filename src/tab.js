const createTabs = (...args) => {
    const divWrapper = document.createElement("div");
    for (let i=0; i<args.length; i++) {
        let tab = document.createElement("div");
        tab.textContent = args[i];
        divWrapper.appendChild(tab);
    }
    divWrapper.classList.add("tab-wrapper");
    
    return divWrapper;
}

export default createTabs;