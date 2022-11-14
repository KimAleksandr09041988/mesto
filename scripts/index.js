function renderCard(container, item) {
  container.prepend(item);
}

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
}

function formDefault(e) {
  e.preventDefault();
}

initialCards.forEach(item => renderCard(galleryCards, createCard(item.name, item.link)));

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
  closePopup(popupProfile);
});

formCard.addEventListener('submit', (event) => {
  renderCard(galleryCards, createCard(inputCardName.value, inputCardUrl.value));
  formDefault(event);
  closePopup(popupCard);
});
