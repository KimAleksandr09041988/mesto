const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__btn-close');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const popupInputName = document.querySelector('.popup__input_info_name');
const profileProfession = document.querySelector('.profile__profession');
const popupInputProfession = document.querySelector('.popup__input_info_profession');

function addValueInValue() {
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function changeTextProfile(form) {
  form.preventDefault();

  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;

  closePopup();
}

function openPopup() {
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', () => {
  openPopup();
  addValueInValue();
})

popupBtnClose.addEventListener('click', closePopup)

popupForm.addEventListener('submit', changeTextProfile);
