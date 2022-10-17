import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    if (this._data.destinyMemberships.length) {
      this._data.id = this._data.destinyMemberships[0].membershipId;
      return `
      <li class="search-result">
        <a class="profile-name" href="#${this._data.id}">${
        this._data.bungieGlobalDisplayName
      }#${this._data.bungieGlobalDisplayNameCode.toString().padStart(4, '0')}
        <img
          src="https://www.bungie.net/${
            this._data.destinyMemberships[0].iconPath
          }"
          alt="Platform Logo"
          class="search-result-platform-img"
        />
        </a>
      </li>`;
    } else {
      return `
      <li class="search-result-no-platform">
        <a class="profile-name-no-platform" href="#">${
          this._data.bungieGlobalDisplayName
        }#${this._data.bungieGlobalDisplayNameCode.toString().padStart(4, '0')}
        <i class="fa-solid fa-circle-xmark search-result-platform-img-no-platform"></i>
        </a>
      </li>`;
    }
  }
}

export default new PreviewView();
