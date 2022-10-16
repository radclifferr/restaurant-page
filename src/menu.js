export default createMenuPage;
import sushiDoughnut from "./images/sushi-doughnuts.jpg";
import grilledCheeseDoughnut from "./images/grilled-cheese-doughnuts.jpg";
import lobsterRoll from "./images/lobster-roll.jpg";
import cupcake from "./images/cupcake.jpg";
import pizzaCake from "./images/pizza-cake.jpg";




function createMenuPage(container) {
    const menuItems = ["Sushi Doughnuts", "Grilled Cheese Doughnuts", "Black Charcoal Bun Lobster Rolls", "Succulent Cupcakes", "Pizza Cake"];

    const menuImages = [sushiDoughnut, grilledCheeseDoughnut, lobsterRoll, cupcake, pizzaCake];
    const footer= document.querySelector(".footer");
    const body = document.createElement("div");
    body.classList.add("main");
    container.insertBefore(body, footer);
    for(let i=0; i< menuItems.length; i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.textContent = menuItems[i];
        body.appendChild(menuItem);

        const menuPictures = document.createElement("img");
        menuPictures.src = menuImages[i];
        menuItem.appendChild(menuPictures);
    }


}