import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._popup.querySelectorAll('.form__input');
  }

  _getInputValues() {
    this._cardData = {};
    this._inputList.forEach((input) => {
      this._cardData[input.name] = input.value;
    });

    return this._cardData;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (event) => {
      event.preventDefault();
      this._obj = this._getInputValues();
      this._submitForm(this._obj);
      this.close();
    });
  }
}
