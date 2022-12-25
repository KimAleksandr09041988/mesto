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

const formValidationProfile = new FormValidator(objForm, '.form_type_profile');
const formValidationCard = new FormValidator(objForm, '.form_type_card');

formValidationProfile.enableValidation();
formValidationCard.enableValidation();

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
  formValidationProfile.resetValidation();
  formValidationProfile.disableButton();
  changeValueProfile();
});

btnConditionFormCards.addEventListener('click', () => {
  openPopup(popupCard);
  formValidationCard.resetValidation();
  formValidationCard.disableButton();
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


