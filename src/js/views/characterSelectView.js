import View from './View.js';

class CharacterSelectView extends View {
  _parentElement = document.querySelector('.character-select');

  addHandlerClick(handler) {
    for (const node of document.querySelectorAll('.profile-search-result')) {
      node.addEventListener('click', function (e) {
        console.log('event fired');
        console.log(node);
        e.preventDefault();
        console.log(node.children[0]);
        window.location.hash = node.children[0].getAttribute('href');
        handler();
      });
    }
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
