const Mustache = require("mustache");
import data from "./js/cardModel.js";

const cardContainer = document.getElementById("card-container");

cardContainer.innerHTML = JSON.stringify(data, null, 2);

// render the cards
console.log(data);

// var output = Mustache.render(`
// {{#categories}}
// <div class="category" data-category="{{name}}">
//   <h2>{{name}}</h2>
//   {{#cards}}
//   <div class="card" data-name="{{name}}">
//     {{name}}
//   </div>
//   {{/cards}}
// </div>
// {{/categories}}
// `, data);

// cardContainer.innerHTML = output;

// // fetch the data and render table
// fetch(frameworkUrl)
//   .then((response) => response.json())
//   .then((incoming) => {

//     // render table
//     table.renderTable(tableDiv, incoming.filter(r => r.source == 'nist_csf_v1.1'), { 'caption': 'NIST CSF 1.1' });

//   })
//   .catch((err) => console.error(err));
