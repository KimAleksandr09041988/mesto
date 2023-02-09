import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {
  profileProfession,
  profileName,
  galleryCards,
  popupImage,
  popupCard,
  popupProfile,
  btnConditionFormCards,
  profileEditBtn,
  initialCards,
  objForm,
  fullNameInput,
  professionInput,
}
  from '../utils/variables.js';
import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formValidationProfile = new FormValidator(objForm, '.form_type_profile');

const formValidationCard = new FormValidator(objForm, '.form_type_card');

const renderCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card', handleCardClick);
    renderCard.addItem(card.createCard());
  }
}, galleryCards);

const popupShowImage = new PopupWithImage(popupImage);
popupShowImage.setEventListeners();

const handleCardClick = (name, link) => {
  popupShowImage.open(name, link);
};

const popupAddCard = new PopupWithForm({
  submitForm: (obj) => {
    const card = new Card(obj, "#card", handleCardClick);
    renderCard.addItem(card.createCard());
  },
}, popupCard);

const popupSetProfile = new PopupWithForm({
  submitForm: (obj) => {
    setUserInfo.setUserInfo(obj);

  },
}, popupProfile);

const setUserInfo = new UserInfo({
  nameSelector: profileName,
  professionSelector: profileProfession,
});

formValidationProfile.enableValidation();

formValidationCard.enableValidation();

renderCard.rendererItems();

popupAddCard.setEventListeners();

popupSetProfile.setEventListeners();

btnConditionFormCards.addEventListener('click', () => {
  formValidationCard.resetValidation();
  formValidationCard.disableButton();
  popupAddCard.open();
});

profileEditBtn.addEventListener('click', () => {
  formValidationProfile.resetValidation();
  formValidationProfile.disableButton();
  fullNameInput.value = setUserInfo.getUserInfo().name;
  professionInput.value = setUserInfo.getUserInfo().profession;
  popupSetProfile.open();
});
