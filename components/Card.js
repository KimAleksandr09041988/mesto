export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._template = cardSelector;
    this._newCart = this._getTemplate();
    this._title = this._newCart.querySelector('.gallery__title');
    this._img = this._newCart.querySelector('.gallery__img');
    this._btnLike = this._newCart.querySelector('.gallery__like');
    this._btnRemove = this._newCart.querySelector('.gellery__btn-remove');
  }

  _getTemplate() {
    const card = document
      .querySelector(`${this._template}`)
      .content
      .querySelector('.gallery__card')
      .cloneNode(true);

    return card;
  }

  _changeData() {
    this._title.textContent = this._name;
    this._img.src = this._link;
    this._img.alt = this._name;
  }

  _handleConditionLike() {
    this._btnLike.classList.toggle('gallery__like_condition_active');
  }

  _removeCard() {
    this._newCart.remove();
    this._newCart = null;
  }

  _setEventListeners() {
    this._btnLike.addEventListener('click', () => {
      this._handleConditionLike();
    });

    this._btnRemove.addEventListener('click', () => {
      this._removeCard();
    });

    this._img.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  createCard() {
    this._changeData();
    this._setEventListeners();
    return this._newCart;
  }
}
