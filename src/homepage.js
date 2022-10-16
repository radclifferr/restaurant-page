export default createHomePage;

function createHomePage (container) {
    const footer= document.querySelector(".footer");
    const copy = ["Welcome to our Resturant! Good food Here for you to eat!","Featured plate, good grubs", "Chow Down on this. I promise it wont kill you. "]
    const body = document.createElement("div");
    body.classList.add("main");
    container.insertBefore(body, footer);
    for (let i=0; i< copy.length; i++){
        const text = document.createElement("div");
        text.textContent= copy[i];
        body.appendChild(text);
    }
}
