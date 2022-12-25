import { openPopup } from './utils.js';
import {
  imgFigure,
  subtitleFigure,
  popupImage
}
  from './variables.js';

export default class Card {
  constructor(text, link, template) {
    this._text = text;
    this._link = link;
    this._template = template;
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
    this._title.textContent = this._text;
    this._img.alt = this._text;
    this._img.src = this._link;
  }

  _handleDataPopup() {
    imgFigure.src = this._link;
    imgFigure.alt = this._text;
    subtitleFigure.textContent = this._text;
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
      this._handleDataPopup();
      openPopup(popupImage);
    });
  }

  createCard() {
    this._changeData();
    this._setEventListeners();

    return this._newCart;
  }
}
