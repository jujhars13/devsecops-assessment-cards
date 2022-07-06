import cardData from "./js/cardModel.js";
import { renderUserView } from "./js/cardRenderer.js";

document.getElementById("cards-go-here").innerHTML = renderUserView(cardData);

// add flip animation to cards
const cards = document.getElementsByClassName("card-number");
Object.values(cards).forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.classList.toggle("flipCard");
  });
});

/**
 * easter-egg tribute to the early web
 * We don't know what we're doing with the css and design so
 * we're sticking in silly things to distract from that fact
 */
setTimeout(() => {
  const titleEl = document.getElementById("page-title");
  const marquee = document.createElement("marquee");
  titleEl.parentNode.insertBefore(marquee, titleEl);
  marquee.appendChild(titleEl);
}, 5000);
