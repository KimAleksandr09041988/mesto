import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { openPopup, closePopup } from './utils.js';
import {
  inputProfession,
  inputName,
  profileProfession,
  profileName,
  cardData,
  galleryCards,
  initialCards,
  profileEditBtn,
  popupProfile,
  objForm,
  btnConditionFormCards,
  popupCard,
  formCard,
  formProfile,
  inputCardName,
  inputCardUrl
}
  from './variables.js';

function renderCard(container, item, template) {
  const card = new Card(item.name, item.link, template);
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

function getDataCard(name, link) {
  cardData.name = name;
  cardData.link = link;

  return cardData;
}

initialCards.forEach(item => {
  renderCard(galleryCards, item, '#card');
});

profileEditBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  changeValueProfile();
  removeValidateSettings(popupProfile);
});

btnConditionFormCards.addEventListener('click', () => {
  openPopup(popupCard);
  removeValidateSettings(popupCard);
  formCard.reset();
});

formProfile.addEventListener('submit', () => {
  changeTextProfile();
  closePopup(popupProfile);
});

formCard.addEventListener('submit', () => {
  renderCard(galleryCards, getDataCard(inputCardName.value, inputCardUrl.value), '#card');
  closePopup(popupCard);
});

new FormValidator(objForm, '.form_type_profile').enableValidation();

new FormValidator(objForm, '.form_type_card').enableValidation();
