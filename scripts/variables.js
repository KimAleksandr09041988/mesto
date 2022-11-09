const profileEditBtn = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formProfile = document.querySelector('[name="profile"]');
const formCard = document.querySelector('[name="card"]');
const inputName = document.querySelector('[name="fullName"]');
const inputProfession = document.querySelector('[name="profession"]');
const inputCardName = document.querySelector('[name="cardName"]');
const inputCardUrl = document.querySelector('[name="cardUrl"]');
const galleryCards = document.querySelector('.gallery__cards');
const btnConditionFormCards = document.querySelector('.profile__add-btn');
const popupCard = document.querySelector('.popup_card');
const likeBtns = document.querySelectorAll('.gallery__like');
const popupImage = document.querySelector('.popup_image');
const imgFigure = document.querySelector('.figure__img');
const subtitleFigure = document.querySelector('.figure__subtitle');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
