const Mustache = require("mustache");
import data from "./js/cardModel.js";

const cardContainer = document.getElementById("card-container");
//document.getElementById("debug").innerHTML = JSON.stringify(data, null, 2);

// render the cards
const template = Mustache.render(`
{{#data}}
<div class="category" data-category="{{categoryName}}">
  <h2>{{categoryName}}</h2>
  <div class="row">
    {{#cards}}
    <div class="col">
      <div class="card" style="width: 18rem;" data-id="{{id}}">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="20%" y="50%" fill="#dee2e6" dy=".3em">{{id}}. {{title}}</text></svg>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-header">
          {{id}}. {{title}}
        </div>
        <div class="card-body">
          <p class="card-text">
            {{description}}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item high-score">{{high_score}}</li>
          <li class="list-group-item low-score">{{low_score}}</li>
        </ul>
        {{#more_info_link}}
        <div class="card-body">
          <a href="{{more_info_link}}" class="card-link">More Info</a>
        </div>
        {{/more_info_link}}
      </div>
    </div>
    {{/cards}}
  </div>
</div>
{{/data}}
`, { data });

cardContainer.innerHTML = template;
