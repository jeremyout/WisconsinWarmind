import View from './View.js';
import resultsView from './resultsView.js';

class CharacterSelectView extends View {
  _parentElement = document.querySelector('.character-select');

  addHandlerRender(handler) {
    // handler();
  }

  _generateMarkup() {
    return `
    <div class="character">
        <p class="char-class">Warlocky</p>
        <p class="power-level">1560</p>
    </div>
    <div class="character">
        <p class="char-class">Hunter</p>
        <p class="power-level">1560</p>
    </div>
    <div class="character">
        <p class="char-class">Titan</p>
        <p class="power-level">1560</p>
    </div>
  `;
  }
}

export default new CharacterSelectView();
