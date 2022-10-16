import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    if (this._data.destinyMemberships.length) {
      return `
      <li class="search-result">
        <p class="profile-name">${this._data.bungieGlobalDisplayName}#${this._data.bungieGlobalDisplayNameCode}</p>
        <img
          src="https://www.bungie.net/${this._data.destinyMemberships[0].iconPath}"
          alt="Platform Logo"
          class="search-result-platform-img"
        />
      </li>`;
    } else {
      return `
      <li class="search-result-no-platform">
        <p class="profile-name-no-platform">${this._data.bungieGlobalDisplayName}#${this._data.bungieGlobalDisplayNameCode}</p>
        <i class="fa-solid fa-circle-xmark search-result-platform-img-no-platform"></i>
      </li>`;
    }
  }
}

export default new PreviewView();
