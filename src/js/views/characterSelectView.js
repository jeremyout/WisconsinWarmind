import View from './View.js';

class CharacterSelectView extends View {
  _parentElement = document.querySelector('.character-select');

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
    return `
    <div class="character-block">
        <a href="" class="character">
          <p class="char-class">Warlocky</p>
          <p class="power-level">1560</p>
        </a>
    </div>
    <div class="character-block">
        <a href="" class="character">
          <p class="char-class">Hunter</p>
          <p class="power-level">1560</p>
        </a>
    </div>
    <div class="character-block">
        <a href="" class="character">
          <p class="char-class">Titan</p>
          <p class="power-level">1560</p>
        </a>
    </div>
  `;
  }
}

export default new CharacterSelectView();
