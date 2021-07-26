import {data} from "./js/cards.js";
const cardContainer = document.getElementById('card-container');

// render the cards
data.forEach(element => {
  console.log(element);
});
// // fetch the data and render table
// fetch(frameworkUrl)
//   .then((response) => response.json())
//   .then((incoming) => {

//     // render table
//     table.renderTable(tableDiv, incoming.filter(r => r.source == 'nist_csf_v1.1'), { 'caption': 'NIST CSF 1.1' });

//   })
//   .catch((err) => console.error(err));
