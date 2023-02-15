import Popup from './Popup.js';

export default class PopupWithBtn extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = document.querySelector('.form_type_delete');
  }

  returnElem(elem) {
    this._elem = elem;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._elem);
      super.close();
    });
  }

}
