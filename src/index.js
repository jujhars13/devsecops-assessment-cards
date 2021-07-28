const Mustache = require("mustache");
import data from "./js/cardModel.js";

const cardContainer = document.getElementById("card-container");
//document.getElementById("debug").innerHTML = JSON.stringify(data, null, 2);

const cardTemplate = Mustache.render(`
{{#data}}
{{#cards}}

{{/cards}}
{{/data}}
`, { data });

// render the cards
const classicTemplate = Mustache.render(
  `
{{#data}}
{{#cards}}
<div class="col-lg-6 col-xxl-4 mb-5">
  <div class="card bg-light border-0 h-100">
      <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>
          <h2 class="fs-4 fw-bold">{{id}}. {{title}}</h2>
          <p class="mb-0" class="card-text">
            {{description}}
          </p>
          <a class="btn btn-primary btn-sm" href="#!">Show</a>
          <div class="card-body high-score">
            {{high_score}}
          </div>
          <div class="card-body low-score">
            {{low_score}}
          </div>
          {{#more_info_link}}
          <div class="card-body">
            <a href="{{more_info_link}}" class="card-link">More Info</a>
          </div>
          {{/more_info_link}}
          <footer class="card-footer">{{categoryName}}</footer>
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
Object.values(cards).forEach(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("flipCard");
  });
});
