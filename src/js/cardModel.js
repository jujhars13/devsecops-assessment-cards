// transform the raw card json
// we want an array of elements that look like
// [{
//   categoryName: <name>
//   cards:[<card_data>,card_data>]
// },
// {
//   categoryName: <name>
//   cards:[<card_data>,card_data>]
// }]
import rawCardData from "../data/cardData.json";
import moreCardInfo from "../data/moreCardInfo.json";

// get all categories first then add data to them
// we want the data objects by returned by category
// get unique categories to begin with
let categories = {};
rawCardData.forEach((el) => {
  categories[el.category] = {};
});
rawCardData.forEach((el) => {
  if (el.category) {
    categories[el.category].categoryName = el.category;
    categories[el.category].cards = [];
  }
});
rawCardData.forEach((card) => {
  let moreInfoData = moreCardInfo.filter((el) => {
    return el.cardId === card.id;
  });
  card.moreCardInfo = moreInfoData;
  if (card.category) {
    categories[card.category].categoryName = card.category;
    categories[card.category].cards.push(card);
  }
});

const cardOnlyData = Object.values(categories);
//console.log(cardOnlyData);

export default cardOnlyData;
