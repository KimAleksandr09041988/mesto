// const showInputError = (formElement, inputElement, errorMessage, obj) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(`${obj.inputErrorClass}`);
//   errorElement.textContent = errorMessage;
// };

// const toggleButtonState = (inputList, buttonElement, obj) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(`${obj.inactiveButtonClass}`);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(`${obj.inactiveButtonClass}`);
//     buttonElement.disabled = false;
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some(input => {
//     return !input.validity.valid;
//   });
// };

// const hideInputError = (formElement, inputElement, obj) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(`${obj.inputErrorClass}`);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement, obj) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, obj);
//   } else {
//     hideInputError(formElement, inputElement, obj);
//   }
// };

// const setEventListeners = (fieldset, obj) => {
//   const inputList = Array.from(fieldset.querySelectorAll(`${obj.inputSelector}`));
//   const buttonElement = fieldset.querySelector(`${obj.submitButtonSelector}`);

//   toggleButtonState(inputList, buttonElement, obj);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(fieldset, inputElement, obj);
//       toggleButtonState(inputList, buttonElement, obj);
//     });
//   });
// };

// const enableValidation = (obj) => {
//   const formList = Array.from(document.querySelectorAll(`${obj.formSelector}`));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetList = Array.from(formElement.querySelectorAll(`${obj.fieldsetSelector}`));

//     fieldsetList.forEach(fieldset => {
//       setEventListeners(fieldset, obj);
//     });
//   });
// };

// enableValidation(objForm);

class FormValidator {
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

const validProfile = new FormValidator(objForm, '.form_type_profile');
const validCard = new FormValidator(objForm, '.form_type_card');

validProfile.enableValidation();
validCard.enableValidation();
