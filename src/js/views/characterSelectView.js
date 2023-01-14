import View from './View.js';
import { ClassById } from '../helpers.js';

class CharacterSelectView extends View {
  _parentElement = document.querySelector('.character-list');

  addHandlerClick(handler) {
    for (const node of document.querySelectorAll('.profile-search-result')) {
      node.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.hash = node.children[0].getAttribute('href');
        handler();
      });
    }
  }

  _generateMarkup() {
    if (this._data.length === 3) {
      return `
      <li class="character-block-${this._data[0].classType}" data-class-type="${
        this._data[0].classType
      }">
          <a href="#${this._data[0].characterId}" class="character">
            <p class="char-class">${ClassById[this._data[0].classType]}</p>
            <p class="power-level">${this._data[0].light}</p>
          </a>
      </li>
      <li class="character-block-${this._data[1].classType}" data-class-type="${
        this._data[1].classType
      }">
          <a href="#${this._data[1].characterId}" class="character">
          <p class="char-class">${ClassById[this._data[1].classType]}</p>
          <p class="power-level">${this._data[1].light}</p>
          </a>
      </li>
      <li class="character-block-${this._data[2].classType}" data-class-type="${
        this._data[2].classType
      }">
          <a href="#${this._data[2].characterId}" class="character">
          <p class="char-class">${ClassById[this._data[2].classType]}</p>
          <p class="power-level">${this._data[2].light}</p>
          </a>
      </li>
    `;
    } else if (this._data.length === 2) {
      return `
      <li class="character-block-${this._data[0].classType}" data-class-type="${
        this._data[0].classType
      }">
          <a href="#${this._data[0].characterId}" class="character">
            <p class="char-class">${ClassById[this._data[0].classType]}</p>
            <p class="power-level">${this._data[0].light}</p>
          </a>
      </li>
      <li class="character-block-${this._data[1].classType}" data-class-type="${
        this._data[1].classType
      }">
          <a href="#${this._data[1].characterId}" class="character">
          <p class="char-class">${ClassById[this._data[1].classType]}</p>
          <p class="power-level">${this._data[1].light}</p>
          </a>
      </li>
    `;
    } else {
      console.log(this._data);
      return `
      <li class="character-block-${this._data.classType}" data-class-type="${
        this._data.classType
      }">
          <a href="#${this._data[0].characterId}" class="character">
            <p class="char-class">${ClassById[this._data.classType]}</p>
            <p class="power-level">${this._data.light}</p>
          </a>
      </li>
    `;
    }
    // return this._data
    //   .map(result => characterPreviewView.render(result, false))
    //   .join('');
  }
}

export default new CharacterSelectView();
