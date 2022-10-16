import './styles.css';
import createHomePage from "./homepage.js";



cacheDom();
createHeader();
loadPage();
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
            loadPage();
        });
        header.appendChild(button);
    }
};

function createFooter () {
    const footer= document.createElement("div");
    footer.classList.add("footer");
    container.appendChild(footer);
};

function loadPage() {
    createHomePage (container);
}