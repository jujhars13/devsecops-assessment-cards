const Mustache = require("mustache");
import data from "./js/cardModel.js";

const cardContainer = document.getElementById("card-container");
//document.getElementById("debug").innerHTML = JSON.stringify(data, null, 2);

const cardTemplate = Mustache.render(
  `
{{#data}}
<div class="category-name">
  <h1>{{{categoryName}}}</h1>
</div>
{{#cards}}
<div class="main-card-container">
  <div class="question-card">
    <div class="card-front {{{categoryName}}}">
      <h1>{{id}}. {{title}}</h1>
      <p>{{description}}</p>
      <footer class="card-footer">{{categoryName}}</footer>
    </div>
    <div class="card-back">
      <h1>{{id}}. {{title}}</h1>
      <p class="high-score">{{high_score}}</p>
      <p class="low-score">{{low_score}}</p>
      {{#more_info_link}}
      <p><a href="{{more_info_link}}" class="card-link">More Info</a></p>
      {{/more_info_link}}
    </div>
  </div>
</div>
{{/cards}}
{{/data}}
`,
  { data }
);

cardContainer.innerHTML = cardTemplate;

// add flip animation to cards
const cards = document.getElementsByClassName("question-card");
Object.values(cards).forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("flipCard");
  });
});
