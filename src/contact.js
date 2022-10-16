export default createContactPage;
import servingFood from "./images/man-serving-food.jpg";

function createContactPage (container) {
    const footer= document.querySelector(".footer");
    const body = document.createElement("div");
    body.classList.add("main");
    container.insertBefore(body, footer);

    const contactPage = document.createElement("div");
    contactPage.classList.add("contact-page");
    body.appendChild(contactPage);


    const detailLeft = document.createElement("img");
    detailLeft.classList.add("detailLeft");
    detailLeft.src = servingFood;
    contactPage.appendChild(detailLeft);


    const detailRight = document.createElement("div");
    detailRight.classList.add("detailRight");
    contactPage.appendChild(detailRight);

    const detailRightCopy = ["Contact Us To Place An Order!", "Phone (555) 555-5555", "fakeEmail@reallyFakeEmail.com"]
    for (let i = 0; i <detailRightCopy.length; i++){
        const copyDiv = document.createElement("div");
        copyDiv.textContent = detailRightCopy[i];
        detailRight.appendChild(copyDiv);
    }

}
