import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._img = this._popup.querySelector('.figure__img');
    this._title = this._popup.querySelector('.figure__subtitle');
  }

  open(name, link) {
    this._img.src = link;
    this._img.alt = name;
    this._title.textContent = name;
    super.open();
  }
}
