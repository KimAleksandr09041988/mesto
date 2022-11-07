const profileEditBtn = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup_profile');
const popupFormProfile = document.querySelector('.form_profile');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('[name="fullName"]');
const profileProfession = document.querySelector('.profile__profession');
const formInputProfession = document.querySelector('[name="profession"]');
const galleryCarts = document.querySelector('.gallery__carts');
const profileAddcarts = document.querySelector('.profile__add-btn');
const popupCart = document.querySelector('.popup_cart');
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



function createCard(name, link) {
  const card = cardTemplate.querySelector('.gallery__cart').cloneNode(true);

  card.querySelector('.gallery__img').src = `${link}`;
  card.querySelector('.gallery__img').alt = `${name}`;
  card.querySelector('.gallery__title').textContent = `${name}`;


  galleryCarts.prepend(card);
}

initialCards.forEach(item => createCard(item.name, item.link));

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

profileAddcarts.addEventListener('click', () => {
  openPopup(popupCart);
});

// profile-info
function changeValue() {
  formInputName.value = profileName.textContent;
  formInputProfession.value = profileProfession.textContent;
}

function changeTextProfile(form) {
  form.preventDefault();

  profileName.textContent = formInputName.value;
  profileProfession.textContent = formInputProfession.value;

  closePopup(popupProfile);
}

profileEditBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  changeValue();
});

popupFormProfile.addEventListener('submit', changeTextProfile);

// carts

