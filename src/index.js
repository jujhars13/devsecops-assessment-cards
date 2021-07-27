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
  <div class="row">
    {{#cards}}
    <div class="col">
      <div class="card" style="width: 18rem;" data-id="{{id}}">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">{{title}}</text></svg>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
            {{description}}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">5: {{high_score}</li>
          <li class="list-group-item">1: {{low_score}}</li>
        </ul>
       <div class="card-footer">Card footer</div>
      </div>
    </div>
    {{/cards}}
  </div>
</div>
{{/data}}
`, { data });

cardContainer.innerHTML = template;
