const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__btn_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('form__btn_inactive');
    buttonElement.disabled = false;
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(input => {
    return !input.validity.valid;
  });
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (fieldset) => {
  const inputList = Array.from(fieldset.querySelectorAll('.form__input'));
  const buttonElement = fieldset.querySelector('.form__btn');
  console.log(inputList);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(fieldset, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll('.form__fieldset'));

    fieldsetList.forEach(fieldset => {
      setEventListeners(fieldset);
    });
  });
};
