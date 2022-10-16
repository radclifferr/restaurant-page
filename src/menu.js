export default createMenuPage;
import sushiDoughnut from "./images/sushi-doughnuts.jpg";
import grilledCheeseDoughnut from "./images/grilled-cheese-doughnuts.jpg";
import lobsterRoll from "./images/lobster-roll.jpg";
import cupcake from "./images/cupcake.jpg";
import pizzaCake from "./images/pizza-cake.jpg";




function createMenuPage(container) {
    const menuItems = ["Sushi Doughnuts - $44ea", "Grilled Cheese Doughnuts - $15ea", "Black Charcoal Bun Lobster Rolls - $29ea", "Succulent Cupcakes - $Dont Ask", "Pizza Cake - $16"];

    const menuImages = [sushiDoughnut, grilledCheeseDoughnut, lobsterRoll, cupcake, pizzaCake];
    const menuDescription = ["A delectate dance for your tastebuds","For 'those days'", "Order this to impress your friends", "A crowd favorite among plant lovers", "Pizza Cake, need I say more?"]
    const footer= document.querySelector(".footer");
    const body = document.createElement("div");
    body.classList.add("main");
    container.insertBefore(body, footer);

    const menu =document.createElement("div");
    menu.classList.add("menu");
    body.appendChild(menu);


    for(let i=0; i< menuItems.length; i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.textContent = menuItems[i];
        menu.appendChild(menuItem);

        const menuPictures = document.createElement("img");
        menuPictures.src = menuImages[i];
        menuItem.appendChild(menuPictures);

        const menuDescriptors = document.createElement ("div");
        menuDescriptors.textContent = menuDescription[i];
        menuItem.appendChild(menuDescriptors);


    }


}