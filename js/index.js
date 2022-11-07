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
const profileAddcards = document.querySelector('.profile__add-btn');
const popupCard = document.querySelector('.popup_card');
const cardTemplate = document.querySelector('#card').content;

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

function initialCreateCard(name, link) {
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  card.querySelector('.gallery__img').src = `${link}`;
  card.querySelector('.gallery__img').alt = `${name}`;
  card.querySelector('.gallery__title').textContent = `${name}`;

  galleryCards.prepend(card);
}

function createCard() {
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  card.querySelector('.gallery__img').src = inputCardUrl.value;
  card.querySelector('.gallery__img').alt = inputCardName.value;
  card.querySelector('.gallery__title').textContent = inputCardName.value;
  galleryCards.prepend(card);

  closePopup(popupCard);
}

initialCards.forEach(item => initialCreateCard(item.name, item.link));

function handleEventClosePopup(event) {
  const popupActive = event.target.closest('.popup');
  const isTargetOverlay = event.target.classList.contains('popup_active');
  const isTargetBtnClose = event.target.classList.contains('popup__btn-close');

  if (isTargetOverlay || isTargetBtnClose) {
    closePopup(popupActive);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('click', handleEventClosePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('click', handleEventClosePopup);
}

function changeValueProfile() {
  inputProfession.value = profileProfession.textContent;
  inputName.value = profileName.textContent;
}

function changeValueCard() {
  inputCardUrl.value = '';
  inputCardName.value = '';
}

function changeTextProfile() {
  profileProfession.textContent = inputProfession.value;
  profileName.textContent = inputName.value;
  closePopup(popupProfile);
}

function formDefault(e) {
  e.preventDefault();
}

profileEditBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  changeValueProfile();
});

profileAddcards.addEventListener('click', () => {
  openPopup(popupCard);
  changeValueCard();
});

formProfile.addEventListener('submit', (e) => {
  changeTextProfile();
  formDefault(e);
});

formCard.addEventListener('submit', (e) => {
  createCard();
  formDefault(e);
});
