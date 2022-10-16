import './styles.css';
import createHomePage from "./homepage.js";
import createMenuPage from "./menu.js";
import createContactPage from "./contact.js"
cacheDom();
createHeader();
loadHomePage();
createFooter();

function cacheDom () {
    const container = document.getElementById("container");
};

function createHeader () {
    const header = document.createElement("div");
    header.classList.add("header");
    container.appendChild(header);
    let buttons = ["Home", "Menu","Contact"];
    for (let i=0; i<3; i++){
        const button = document.createElement("button");
        button.textContent =buttons[i];
        button.classList.add(buttons[i]);
        button.addEventListener ("click", () => {
            loadPage(buttons[i]);
        });
        header.appendChild(button);
    }
};

function createFooter () {
    const footer= document.createElement("div");
    footer.classList.add("footer");
    container.appendChild(footer);
};
function loadHomePage(){
    createHomePage (container);
}


function loadPage(buttonIndex) {
    clearPageContents()
    if (buttonIndex ==="Home"){
        createHomePage (container);
    }else if (buttonIndex === "Menu"){
        createMenuPage (container);
    }else if (buttonIndex === "Contact"){
        createContactPage(container);
    }
}

function clearPageContents() {
    const main = document.querySelector(".main");
    if(main != null){
        main.remove();   
    }
    
};