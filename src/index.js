import EventEmitter from "eventemitter3";
import ky from "ky";
import cardData from "./js/cardModel.js";
import { renderUserView, renderFacilitatorView } from "./js/cardRender.js";

const playerName = "playerThree";

// const EE = new EventEmitter();
function getServerState() {
  return ky.get("http://localhost:8081/data/a89839123").json();
}

let responseState = await getServerState();

//console.log({ cardData, state });
// async function emitted() {
//   state = await getServerState();
//   console.log(state); // true
// }

// EE.on("score-updated", emitted, state);
// //EE.removeListener("another-event", emitted, state);


// hydrate the card data with the question response state from the server
// so we can highlight chosen cards by this user
const hydratedCardData = cardData.map((el) => {
  el.cards.forEach((card, key) => {
    let cardServerResponse= responseState.questions.find(response => {
      return response.id === card.id;
    });
    if (cardServerResponse) {
      el.cards[key][`response${cardServerResponse.responses[playerName]}`] = true;
    }
  });
  return el;
});

// render the cards
const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = renderUserView(hydratedCardData);

// add flip animation to cards, on number click
const cards = document.getElementsByClassName("card-number");
Object.values(cards).forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.classList.toggle("flipCard");
    // EE.emit("score-updated");
  });
});
