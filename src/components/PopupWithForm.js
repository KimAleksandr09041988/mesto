import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._popup.querySelectorAll('.form__input');
    this._formBtn = this._popup.querySelector('.form__btn');
    this._textFormBtn = this._formBtn.textContent;
  }

  loadingRequest(isLoading) {
    if (isLoading) {
      this._formBtn.textContent = 'Сохранение...';
    } else {
      this._formBtn.textContent = this._textFormBtn;
    }
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
    });
  }
}
