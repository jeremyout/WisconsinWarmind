class ProfileSearchView {
  _parentEl = document.querySelector('.profile-search-form');

  getQuery() {
    const query = this._parentEl.querySelector('.profile-search-input').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.profile-search-input').value = '';
  }

  addProfileSearchHandler(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new ProfileSearchView();
