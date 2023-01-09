import View from './View.js';
import previewView from './previewView.js';

class ProfileSearchResultsView extends View {
  _parentElement = document.querySelector('.profile-search-results');

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ProfileSearchResultsView();
