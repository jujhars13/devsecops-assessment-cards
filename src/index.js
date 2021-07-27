const Mustache = require("mustache");
import data from "./js/cardModel.js";

const cardContainer = document.getElementById("card-container");
//document.getElementById("debug").innerHTML = JSON.stringify(data, null, 2);

// render the cards
const outputTemplates = [];

const template = Mustache.render(`
{{#data}}
<div class="category" data-category="{{categoryName}}">
  <h2>{{categoryName}}</h2>
  {{#cards}}
    <div class="card" data-id="{{id}}">
      <h3>{{title}}</h3>
      <span>{{id}}</span>
      <span>{{description}}</span>
      <span>{{min_score}}</span>
      <span>{{max_score}}</span>
    </div>
  {{/cards}}
</div>
{{/data}}
`, { data });

cardContainer.innerHTML = template;
