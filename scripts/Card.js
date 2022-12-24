import { openPopup, closePopup } from './utils.js';

export default class Card {
  constructor(text, link) {
    this._text = text;
    this._link = link;
  }

  _getTemplate() {
    const card = document
      .querySelector('#card')
      .content
      .querySelector('.gallery__card')
      .cloneNode(true);

    return card;
  }

  _changeData() {
    const title = this._newCart.querySelector('.gallery__title');
    const img = this._newCart.querySelector('.gallery__img');

    title.textContent = this._text;
    img.alt = this._text;
    img.src = this._link;
  }

  _handleDataPopup() {
    imgFigure.src = this._link;
    imgFigure.alt = this._text;
    subtitleFigure.textContent = this._text;
  }

  _handleConditionLike() {
    const btnLike = this._newCart.querySelector('.gallery__like');
    btnLike.classList.toggle('gallery__like_condition_active');
  }

  _removeCard() {
    this._newCart.remove();
    this._newCart = null;
  }

  _setEventListeners() {
    const btnLike = this._newCart.querySelector('.gallery__like');
    const btnRemove = this._newCart.querySelector('.gellery__btn-remove');
    const img = this._newCart.querySelector('.gallery__img');


    btnLike.addEventListener('click', () => {
      this._handleConditionLike();
    });

    btnRemove.addEventListener('click', () => {
      this._removeCard();
    });

    img.addEventListener('click', () => {
      this._handleDataPopup();
      openPopup(popupImage);
    });
  }

  createCard() {
    this._newCart = this._getTemplate();
    this._changeData();
    this._setEventListeners();

    return this._newCart;
  }
}
