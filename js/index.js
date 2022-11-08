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

function createCard(name, link) {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  const img = card.querySelector('.gallery__img');
  const title = card.querySelector('.gallery__title');
  const btnLike = card.querySelector('.gallery__like');
  const btnRemove = card.querySelector('.gellery__btn-remove');

  img.src = link;
  img.alt = name;
  title.textContent = name;

  img.addEventListener('click', (event) => {
    openPopup(popupImage);
    imgFigure.src = img.src;
    subtitleFigure.textContent = title.textContent;
  });
  btnRemove.addEventListener('click', (event) => event.target.closest('.gallery__card').remove());
  btnLike.addEventListener('click', (event) => event.target.classList.toggle('gallery__like_condition_active'));

  galleryCards.prepend(card);
}



function a(event) {
  const b = event.target.closest('.gallery__card');
  b.addEventListener('click', () => openPopup(popupImage));
}

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

initialCards.forEach(item => createCard(item.name, item.link));

profileEditBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  changeValueProfile();
});

btnConditionFormCards.addEventListener('click', () => {
  openPopup(popupCard);
  changeValueCard();
});

formProfile.addEventListener('submit', (event) => {
  changeTextProfile();
  formDefault(event);
});

formCard.addEventListener('submit', (event) => {
  createCard(inputCardName.value, inputCardUrl.value);
  formDefault(event);
  closePopup(popupCard);
});
