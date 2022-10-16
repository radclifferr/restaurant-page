export default createHomePage;

// function cacheDom () {
//     const container = document.getElementById("container")
// }

// function createHomePage () {
//     console.log("hi")
// }


function createHomePage (container) {
    const copy = ["Welcome to our Resturant! Good food Here for you to eat!","Featured plate, good grubs", "Chow Down on this. I promise it wont kill you. "]
    const body = document.createElement("div");
    body.classList.add("main");
    container.appendChild(body);
    for (let i=0; i< copy.length; i++){
        console.log("hi")
        const text = document.createElement("div");
        text.textContent= copy[i];
        body.appendChild(text);
    }
}
