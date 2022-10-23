const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__btn-close');
const popupForm = document.querySelector('.form');
const profileName = document.querySelector('.profile__name');
const formInputName = document.querySelector('.form__input_info_name');
const profileProfession = document.querySelector('.profile__profession');
const formInputProfession = document.querySelector('.form__input_info_profession');

function addValueInValue() {
  formInputName.value = profileName.textContent;
  formInputProfession.value = profileProfession.textContent;
}

function changeTextProfile(form) {
  form.preventDefault();

  profileName.textContent = formInputName.value;
  profileProfession.textContent = formInputProfession.value;

  closePopup();
}

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', () => {
  openPopup();
  addValueInValue();
})

popupBtnClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', changeTextProfile);
