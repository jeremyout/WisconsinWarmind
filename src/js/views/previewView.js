import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    if (this._data.destinyMemberships.length) {
      return `
      <li class="search-result">
        <p class="profile-name">${
          this._data.bungieGlobalDisplayName
        }#${this._data.bungieGlobalDisplayNameCode
        .toString()
        .padStart(4, '0')}</p>
        <img
          src="https://www.bungie.net/${
            this._data.destinyMemberships[0].iconPath
          }"
          alt="Platform Logo"
          class="search-result-platform-img"
        />
      </li>`;
    } else {
      return `
      <li class="search-result-no-platform">
        <p class="profile-name-no-platform">${
          this._data.bungieGlobalDisplayName
        }#${this._data.bungieGlobalDisplayNameCode
        .toString()
        .padStart(4, '0')}</p>
        <i class="fa-solid fa-circle-xmark search-result-platform-img-no-platform"></i>
      </li>`;
    }
  }
}

export default new PreviewView();
