const dataForRender =
    [
        {
            "category": "Reaction",
            "score": 80,
            "icon": "./assets/images/icon-reaction.svg",
            "colorClass": "reaction"
        },
        {
            "category": "Memory",
            "score": 92,
            "icon": "./assets/images/icon-memory.svg",
            "colorClass": "memory"
        },
        {
            "category": "Verbal",
            "score": 61,
            "icon": "./assets/images/icon-verbal.svg",
            "colorClass": "verbal"
        },
        {
            "category": "Visual",
            "score": 72,
            "icon": "./assets/images/icon-visual.svg",
            "colorClass": "visual"
        }
    ];


async function fetchAndRender(JSONFile) {
    return fetch(JSONFile).then(data => data.json())
        .then(json => render(() => createListHTML(json), '.summary__list'));
}


function createListHTML(arr) {

    let htmlResult = '';
    console.log(arr);
    arr.forEach((element) => {
        htmlResult += `<li class="summary__item">
            <div class="summary__item-meta">
              <i>
                <img src=${element.icon} alt="" />
              </i>
              <span class="summary__item-name ${element.colorClass}"> ${element.category} </span>
            </div>
            <div class="summary__item-total">
              <span class="summary__item-total-score">${element.score}</span
              ><span class="summary__item-slash summary__item-maxnum">/<span><span class="summary__item-maxnum">100</span>
            </div>
          </li>`;
    }
    );
    return htmlResult;

}

function render(html, parentSelector) {

    const parentElement = document.querySelector(parentSelector);
    parentElement.innerHTML = html();
}

fetchAndRender('http://localhost/results-summary-component-main/data.json');