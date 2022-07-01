import Mustache from "mustache";

/**
 * Render the client side template
 * @param {cardData} cardData object
 * @returns string <the rendered HTML template>
 */
function renderUserView(cardData) {
  return Mustache.render(`
{{#data}}
<div class="category-name" data-category="{{slug}}">
  <h1>{{{categoryName}}}</h1>
</div>
{{#cards}}
<div class="main-card-container col-md-6 col-lg-3 mb-2">
  <div class="question-card">
    <div class="card-front {{slug}}">
      <div class="card-number">{{id}}</div>
      {{#important}}
      <span class="card-important"><i class="fas fa-star"></i></span>
      {{/important}}
      <h2>{{title}}</h2>
      <p>{{description}}</p>
      <footer class="card-footer">{{categoryName}}</footer>
      <div>
        <div class="rectangle {{#response1}}chosen{{/response1}}" data-score="1">1</div>
        <div class="rectangle {{#response2}}chosen{{/response2}}" data-score="2">2</div>
        <div class="rectangle {{#response3}}chosen{{/response3}}" data-score="3">3</div>
        <div class="rectangle {{#response4}}chosen{{/response4}}" data-score="4">4</div>
      </div>
    </div>
    <div class="card-back">
      <div class="card-number">{{id}}</div>
      {{#important}}
      <span class="card-important"><i class="fas fa-star"></i></span>
      {{/important}}
      <h2>{{title}}</h2>
      <div class="card-score">
        <p class="card-points high-score">4 points</p>
        <p>{{high_score}}</p>
      </div>
      <div class="card-score">
        <p class="card-points low-score">1 point</p>
        <p>{{low_score}}</p>
      </div>
      {{#more_info_link}}
      <p><a href="{{more_info_link}}" class="card-link">More Info</a></p>
      {{/more_info_link}}
    </div>
  </div>
</div>
{{/cards}}
{{/data}}
`, {data: cardData});
}

/**
 * This renders Facilitator view
 * @param cardData
 * @returns {*}
 */
function renderFacilitatorView(cardData) {
  return Mustache.render(`
{{#data}}
<div class="category-name" data-category="{{slug}}">
  <h1>{{{categoryName}}}</h1>
</div>
{{#cards}}
<div class="main-card-container col-md-6 col-lg-3 mb-2">
  <div class="question-card">
    <div class="card-front {{slug}}">
      <div class="card-number">{{id}}</div>
      {{#important}}
      <span class="card-important"><i class="fas fa-star"></i></span>
      {{/important}}
      <h2>FACILITATOR:{{title}}</h2>
      <p>{{description}}</p>
      <footer class="card-footer">{{categoryName}}</footer>
      <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
      <div>
        <div class="col">
          <div class="row" id="rectangle" data-score="1">1</div>
          <div id="rectangle" data-score="2">2</div>
          <div id="rectangle" data-score="3">3</div>
          <div id="rectangle" data-score="4">4</div>
        </div>
        <div id="rectangle" data-score="1">1</div>
      </div>

    </div>
    <div class="card-back">
      <div class="card-number">{{id}}</div>
      {{#important}}
      <span class="card-important"><i class="fas fa-star"></i></span>
      {{/important}}
      <h2>{{title}}</h2>
      <div class="card-score">
        <p class="card-points high-score">4 points</p>
        <p>{{high_score}}</p>
      </div>
      <div class="card-score">
        <p class="card-points low-score">1 point</p>
        <p>{{low_score}}</p>
      </div>
      {{#more_info_link}}
      <p><a href="{{more_info_link}}" class="card-link">More Info</a></p>
      {{/more_info_link}}
    </div>
  </div>
</div>
{{/cards}}
{{/data}}
`, {data: cardData});
}

export {renderUserView, renderFacilitatorView};
