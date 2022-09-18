import { getJSON, postData } from './helpers';
import { BUNGIE_API_ROOT_PATH } from './config.js';

export const state = {
  search: {
    query: {
      bungieName: '',
      bungieNameCode: 0,
    },
    results: [],
    resultsPerPage: 5,
    page: 1,
  },
};

export const searchPlayer = async function (query) {
  try {
    console.log(query);

    // If a bungie name ID was given, set it, otherwise just use the provided name
    if (query.split('#').length > 1) {
      state.search.query.bungieName = query.split('#')[0];
      state.search.query.bungieNameCode = +query.split('#')[1];
    } else {
      state.search.query.bungieName = query;
      state.search.query.bungieNameCode = 0;
    }

    await postData(`${BUNGIE_API_ROOT_PATH}/User/Search/GlobalName/0/ `, {
      displayNamePrefix: state.search.query.bungieName,
    }).then(data => {
      // Save search results
      state.search.results = data.Response.searchResults;
      console.log(state.search);
    });
  } catch (err) {
    console.error(`${err} Unable to get search results 💥`);
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; // 9;

  return state.search.results.slice(start, end);
};
