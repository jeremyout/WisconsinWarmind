import * as model from './model.js';
import profileSearchView from './views/profileSearchView';
import profileSearchResultsView from './views/profileSeachResultsView.js';
import paginationView from './views/paginationView.js';
import characterSelectView from './views/characterSelectView.js';

const profileSeachResultLabel = document.querySelector(
  '.profile-search-results-label'
);

const controlCharacterSelect = async function () {
  // Store the selected profile
  model.storeSelectedProfile(model.state.search.results);

  characterSelectView.render(model.state.search);
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = profileSearchView.getQuery();
    if (!query) return;

    // 2) Load search results and show result label
    profileSeachResultLabel.classList.remove('hidden');
    await model.searchPlayer(query);

    // 3) Render results
    profileSearchResultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
    characterSelectView.addHandlerClick(controlCharacterSelect);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // console.log(goToPage);
  // Render NEW results
  profileSearchResultsView.render(model.getSearchResultsPage(goToPage));
  // Render NEW pagination buttons
  paginationView.render(model.state.search);
  characterSelectView.addHandlerClick(controlCharacterSelect);
};

const init = function () {
  profileSearchView.addProfileSearchHandler(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
