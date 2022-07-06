import Mustache from "mustache";

/**
 * Render the client side template
 * @param {cardData} cardData object
 * @returns string <the rendered HTML template>
 */
function renderUserView(cardData) {
  return Mustache.render(
    `
  {{#data}}
    <div class="category-name" data-category="{{slug}}">
      <h2 class="display-4">{{{categoryName}}}</h2>
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
        </div>
        <div class="card-back scroll">
          <div class="card-number">{{id}}</div>
          {{#important}}
          <span class="card-important"><i class="fas fa-star"></i></span>
          {{/important}}
          <h2>{{title}}</h2>
          <div class="card-score">
            <p class="card-points high-score">5 points</p>
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
  `,
    { data: cardData }
  );
}

export { renderUserView };
