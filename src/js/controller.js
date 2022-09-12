import * as model from './model.js';
import profileSearchView from './views/profileSearchView';
import resultsView from './views/resultsView.js';

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = profileSearchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.searchPlayer(query);

    // 3) Render results
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  profileSearchView.addProfileSearchHandler(controlSearchResults);
};
init();
