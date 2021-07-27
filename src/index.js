const Mustache = require("mustache");
import data from "./js/cardModel.js";

const cardContainer = document.getElementById("card-container");
//document.getElementById("debug").innerHTML = JSON.stringify(data, null, 2);

// render the cards
const template = Mustache.render(
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
          <ul class="list-group list-group-flush">
            <li class="list-group-item high-score">{{high_score}}</li>
            <li class="list-group-item low-score">{{low_score}}</li>
          </ul>
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

cardContainer.innerHTML = template;
