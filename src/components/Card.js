export default class Card {
  constructor(data, cardSelector, handleCardClick, handleCardDelete, userId) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes;
    this._id = data.owner._id;
    this._idCard = data._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._templateSelector = cardSelector;
    this._newCard = this._getTemplate();
    this._title = this._newCard.querySelector('.gallery__title');
    this._img = this._newCard.querySelector('.gallery__img');
    this._btnLike = this._newCard.querySelector('.gallery__like');
    this._quantityLike = this._newCard.querySelector('.gallery__quantity-like');
    this._btnRemove = this._newCard.querySelector('.gallery__btn-remove');
  }

  getCardId() {
    return this._idCard;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._templateSelector)
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

  setQuantityLike() {
    this._quantityLike.textContent = this._like.length;
  }

  _handleConditionLike() {
    this._btnLike.classList.toggle('gallery__like_condition_active');
  }

  _sortCard() {
    if (this._id !== this._userId) {
      this._btnRemove.remove();
    }
  }

  _setEventListeners() {
    this._btnLike.addEventListener('click', () => {
      this._handleConditionLike();
    });

    this._btnRemove.addEventListener('click', () => {
      this._handleCardDelete(this);
    });

    this._img.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  createCard() {
    this._changeData();
    this._setEventListeners();
    this.setQuantityLike();
    this._sortCard();
    return this._newCard;
  }

  removeCard() {
    this._newCard.remove();
    this._newCard = null;
  }

}
