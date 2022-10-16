export default createHomePage;
import restaurant from "./images/resturant.jpg";
import featuredPlate from "./images/featured-plate.jpg";
import moreFood from "./images/more-food.jpg";

function createHomePage (container) {
    const footer= document.querySelector(".footer");
    const copy = ["Welcome to our Resturant! Good food Here for you to eat!","Featured plate, good grubs", "Chow Down on this. I promise it wont kill you. "]
    const copyImages = [restaurant, featuredPlate, moreFood];
    const body = document.createElement("div");
    body.classList.add("main");
    container.insertBefore(body, footer);

    const homePage = document.createElement("div");
    homePage.classList.add("home-page");
    body.appendChild(homePage);

    for (let i=0; i< copy.length; i++){
        const text = document.createElement("div");
        text.textContent= copy[i];
        homePage.appendChild(text);
        const image = document.createElement("img");
        image.src = copyImages[i];
        text.appendChild(image);
    }
}
