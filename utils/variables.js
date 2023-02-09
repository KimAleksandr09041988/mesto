const profileProfession = '.profile__profession';
const profileName = '.profile__name';
const galleryCards = '.gallery__cards';
const popupImage = '.popup_image';
const popupCard = '.popup_card';
const popupProfile = '.popup_profile';
const btnConditionFormCards = document.querySelector('.profile__add-btn');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const fullNameInput = document.querySelector('#fullName-input');
const professionInput = document.querySelector('#profession-input');

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

const objForm = {
  fieldsetSelector: '.form__fieldset',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_inactive',
  inputErrorClass: 'form__input_type_error',
};

export {
  profileEditBtn,
  popupProfile,
  profileName,
  profileProfession,
  galleryCards,
  btnConditionFormCards,
  popupCard,
  popupImage,
  initialCards,
  objForm,
  fullNameInput,
  professionInput
};
