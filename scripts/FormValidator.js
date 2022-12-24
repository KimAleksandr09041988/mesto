export default class FormValidator {
  constructor(obj, formSelector) {
    this._formSelector = formSelector;
    this._fieldsetSelector = obj.fieldsetSelector;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${this._inputErrorClass}`);
    errorElement.textContent = errorMessage;
  };

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${this._inactiveButtonClass}`);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(`${this._inactiveButtonClass}`);
      buttonElement.disabled = false;
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some(input => {
      return !input.validity.valid;
    });
  };

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${this._inputErrorClass}`);
    errorElement.textContent = '';
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _setEventListeners(fieldset) {
    const inputList = Array.from(fieldset.querySelectorAll(`${this._inputSelector}`));
    const buttonElement = fieldset.querySelector(`${this._submitButtonSelector}`);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(fieldset, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    const form = document.querySelector(`${this._formSelector}`);

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(form.querySelectorAll(`${this._fieldsetSelector}`));

    fieldsetList.forEach(fieldset => {
      this._setEventListeners(fieldset);
    });
  };
}
