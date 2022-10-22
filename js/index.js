const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__btn-close');

profileEditBtn.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  addValueInValue();
})

popupBtnClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened')
})

function addValueInValue() {
  const profileName = document.querySelector('.profile__name');
  const popupInputName = document.querySelector('.popup__input_name');
  const profileProfession = document.querySelector('.profile__profession');
  const popupInputProfession = document.querySelector('.popup__input_profession');

  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

const popupContainer = document.querySelector('.popup__container');

function changeTextProfile(form) {
  form.preventDefault();

  const profileName = document.querySelector('.profile__name');
  const popupInputName = document.querySelector('.popup__input_name');
  const profileProfession = document.querySelector('.profile__profession');
  const popupInputProfession = document.querySelector('.popup__input_profession');

  if (popupInputName.value) {
    profileName.textContent = popupInputName.value;
  }
  if (popupInputProfession.value) {
    profileProfession.textContent = popupInputProfession.value;
  }

  popup.classList.remove('popup_opened')
}

popupContainer.addEventListener('submit', changeTextProfile);
