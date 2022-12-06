function renderCard(container, item) {
  container.prepend(item);
}

function createCard(name, link) {
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
  const img = card.querySelector('.gallery__img');
  const title = card.querySelector('.gallery__title');
  const btnLike = card.querySelector('.gallery__like');
  const btnRemove = card.querySelector('.gellery__btn-remove');

  img.src = link;
  img.alt = name;
  title.textContent = name;

  img.addEventListener('click', () => {
    openPopup(popupImage);
    imgFigure.src = img.src;
    imgFigure.alt = title.textContent;
    subtitleFigure.textContent = title.textContent;
  });

  btnRemove.addEventListener('click', (event) => event.target.closest('.gallery__card').remove());
  btnLike.addEventListener('click', (event) => event.target.classList.toggle('gallery__like_condition_active'));

  return card;
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
  document.addEventListener('keydown', handleEventEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('click', handleEventClosePopup);
  document.removeEventListener('keydown', handleEventEscape);
}

function changeValueProfile() {
  inputProfession.value = profileProfession.textContent;
  inputName.value = profileName.textContent;
}

function changeTextProfile() {
  profileProfession.textContent = inputProfession.value;
  profileName.textContent = inputName.value;
}

function handleEventEscape(event) {
  if (event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_active');
    closePopup(popupActive);
  }
}

function removeValidateSettings(popup) {
  const inputsList = popup.querySelectorAll('.form__input');
  const inputErrorsList = popup.querySelectorAll('.form__input-error');
  inputsList.forEach(input => {
    input.classList.remove('form__input_type_error');
  });
  inputErrorsList.forEach(inputError => {
    inputError.textContent = '';
  });
}

function disableBtnSubmitForm(popup, obj) {
  const formBtnInactive = popup.querySelector(`${obj.submitButtonSelector}`);
  formBtnInactive.disabled = true;
  formBtnInactive.classList.add(`${obj.inactiveButtonClass}`);
}

initialCards.forEach(item => renderCard(galleryCards, createCard(item.name, item.link)));

profileEditBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  changeValueProfile();
  removeValidateSettings(popupProfile);
  disableBtnSubmitForm(popupProfile, objForm);
});

btnConditionFormCards.addEventListener('click', () => {
  openPopup(popupCard);
  removeValidateSettings(popupCard);
  disableBtnSubmitForm(popupCard, objForm);
  formCard.reset();
});

formProfile.addEventListener('submit', () => {
  changeTextProfile();
  closePopup(popupProfile);
});

formCard.addEventListener('submit', () => {
  renderCard(galleryCards, createCard(inputCardName.value, inputCardUrl.value));
  closePopup(popupCard);
});
