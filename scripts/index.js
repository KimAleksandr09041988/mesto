import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { openPopup, closePopup } from './utils.js';

function renderCard(container, item) {
  const card = new Card(item.name, item.link);
  container.prepend(card.createCard());
}

function changeValueProfile() {
  inputProfession.value = profileProfession.textContent;
  inputName.value = profileName.textContent;
}

function changeTextProfile() {
  profileProfession.textContent = inputProfession.value;
  profileName.textContent = inputName.value;
}

function removeValidateSettings(popup) {
  const inputsList = popup.querySelectorAll('.form__input');
  const inputErrorsList = popup.querySelectorAll('.form__input-error');
  inputsList.forEach(input => {
    input.classList.remove('form__input_type_error');
  });
  inputErrorsList.forEach(inputError => {
    inputError.textContent = '';
  });
}

function disableBtnSubmitForm(popup, obj) {
  const formBtnInactive = popup.querySelector(`${obj.submitButtonSelector}`);
  formBtnInactive.disabled = true;
  formBtnInactive.classList.add(`${obj.inactiveButtonClass}`);
}

function getDataCard(name, link) {
  cardData.name = name;
  cardData.link = link;

  return cardData
}

initialCards.forEach(item => {
  renderCard(galleryCards, item);
});

profileEditBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  changeValueProfile();
  removeValidateSettings(popupProfile);
  disableBtnSubmitForm(popupProfile, objForm);
});

btnConditionFormCards.addEventListener('click', () => {
  openPopup(popupCard);
  removeValidateSettings(popupCard);
  disableBtnSubmitForm(popupCard, objForm);
  formCard.reset();
});

formProfile.addEventListener('submit', () => {
  changeTextProfile();
  closePopup(popupProfile);
});

formCard.addEventListener('submit', () => {
  renderCard(galleryCards, getDataCard(inputCardName.value, inputCardUrl.value));
  closePopup(popupCard);
});

new FormValidator(objForm, '.form_type_profile').enableValidation();

new FormValidator(objForm, '.form_type_card').enableValidation();
