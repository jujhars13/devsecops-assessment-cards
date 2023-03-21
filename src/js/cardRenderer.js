import Mustache from "mustache";

/**
 * Render the client side template
 * @param {data} data object
 * @returns string <the rendered HTML template>
 */
function renderUserView(data) {
  return Mustache.render(
    `
  {{#data}}
    <div class="category-name" data-category="{{slug}}">
      <h2 class="display-5">{{{categoryName}}}</h2>
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
<!--          {{#moreCardInfo}}-->
<!--          <div>-->
<!--            <div class="accordion" id="accordionExample">-->
<!--            <div class="accordion-item">-->
<!--              <h2 class="accordion-header" id="headingOne">-->
<!--                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">-->
<!--                {{title}}-->
<!--                </button>-->
<!--              </h2>-->
<!--              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">-->
<!--                <div class="accordion-body">-->
<!--                  {{description}}-->
<!--                  {{#url}}<a href="{{url}}">{{url}}</a>{{/url}}-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--          {{/moreCardInfo}}-->
          {{#moreCardInfo}}
  <button class="accordion">{{title}}</button>
  <div class="panel"><p>{{description}}</p>
  <p>{{#url}}<a href="{{url}}">{{url}}</a>{{/url}}</p>
  </div>
          {{/moreCardInfo}}

        </div>
      </div>
    </div>
    {{/cards}}
  {{/data}}
  `,
    { data }
  );
}

export { renderUserView };
