import * as model from './model.js';
import profileSearchView from './views/profileSearchView';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = profileSearchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.searchPlayer(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  console.log(goToPage);
  // Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  profileSearchView.addProfileSearchHandler(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
