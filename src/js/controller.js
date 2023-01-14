import * as model from './model.js';
import profileSearchView from './views/profileSearchView';
import profileSearchResultsView from './views/profileSeachResultsView.js';
import paginationView from './views/paginationView.js';
import characterSelectView from './views/characterSelectView.js';

const profileSeachResultLabel = document.querySelector(
  '.profile-search-results-label'
);

const setEmblemBackgrounds = function () {
  const titan = model.getTitan();
  const hunter = model.getHunter();
  const warlock = model.getWarlock();

  if (titan) {
    document.querySelector(
      '.character-block-0'
    ).style.backgroundImage = `url(https://www.bungie.net/${titan.emblemBackgroundPath})`;
  }
  if (hunter) {
    document.querySelector(
      '.character-block-1'
    ).style.backgroundImage = `url(https://www.bungie.net/${hunter.emblemBackgroundPath})`;
  }
  if (warlock) {
    document.querySelector(
      '.character-block-2'
    ).style.backgroundImage = `url(https://www.bungie.net/${warlock.emblemBackgroundPath})`;
  }
};

const controlCharacterSelect = async function () {
  // Empty the character select view
  characterSelectView._clear();
  // Store the selected profile
  model.storeSelectedSearchResult(model.state.search.results);
  // Fetch and store the profile from the Destiny2.GetProfile endpoint
  await model.storeProfile();
  // Fetch characters
  await model.getAllCharacters();

  characterSelectView.render(model.state.characters);
  setEmblemBackgrounds();
};

const controlSearchResults = async function () {
  try {
    characterSelectView._clear();
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
