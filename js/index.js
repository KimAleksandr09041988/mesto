const profileEditBtn = document.querySelector('.profile__edit-btn');
const popupProfile = document.querySelector('.popup_profile');
const popupBtnClose = document.querySelector('.popup__btn-close');
const popupFormProfile = document.querySelector('.form_profile');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_info_name');
const profileProfession = document.querySelector('.profile__profession');
const formInputProfession = document.querySelector('.form__input_info_profession');
const galleryCarts = document.querySelector('.gallery__carts');

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
  const card = document.createElement('li');

  card.classList.add('gallery__cart');
  card.innerHTML = `
  <img class="gallery__img" src="${link}" alt="${name}">
  <div class="gallery__info">
    <h2 class="gallery__title">${name}</h2>
    <button class="gallery__like" type="button"></button>
  </div>
  `;
  galleryCarts.prepend(card);
}

initialCards.forEach(item => createCard(item.name, item.link));

function openPopup(popup) {
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

// profile-info
function addValueInValue() {
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
  addValueInValue();
});

popupBtnClose.addEventListener('click', (event) => {
  const overlay = event.target.classList.contains('popup_active');
  const closeBtnPopup = event.target.classList.contains('popup__btn-close');

  if (overlay || closeBtnPopup) {
    closePopup(popupBtnClose);
  }
});

popupFormProfile.addEventListener('submit', changeTextProfile);

// carts

