import * as model from './model.js';
import profileSearchView from './views/profileSearchView';

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = profileSearchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.searchPlayer(query);

    // 3) Render results
    // TODO
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  profileSearchView.addProfileSearchHandler(controlSearchResults);
};
init();
