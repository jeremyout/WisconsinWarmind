import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <li class="search-result">
      <p class="profile-name">${this._data.bungieGlobalDisplayName}#${this._data.bungieGlobalDisplayNameCode}</p>
      <img
        src="https://www.bungie.net/${this._data.destinyMemberships[0].iconPath}"
        alt="Platform Logo"
        class="search-result-platform-img"
      />
  </li>
`;
  }
}

export default new PreviewView();
