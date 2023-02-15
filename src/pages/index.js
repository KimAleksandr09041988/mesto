import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {
  profileProfession,
  profileName,
  galleryCards,
  popupImage,
  popupCard,
  popupProfile,
  btnConditionFormCards,
  profileEditBtn,
  validationConfig,
  fullNameInput,
  professionInput,
  formProfile,
  formCard,
  identifier,
  token,
  avatarImg,
  popupDelete,
  formAvatar,
  popupAvatar,
  profileEditAvatar
}
  from '../utils/variables.js';
import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithBtn from '../components/PopupWithBtn.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

let userId;

const server = new Api({
  url: identifier,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

const formValidationProfile = new FormValidator(validationConfig, formProfile);
const formValidationCard = new FormValidator(validationConfig, formCard);
const formValidationAvatar = new FormValidator(validationConfig, formAvatar);

const renderCard = (item) => {
  const card = new Card(item, '#card', handleCardClick, handleCardDelete, userId, addLike, deductLike);
  cardSection.addItem(card.createCard());
};

const cardSection = new Section({
  renderer: (item) => {
    renderCard(item);
  }
}, galleryCards);

const popupShowImage = new PopupWithImage(popupImage);

const handleCardClick = (name, link) => {
  popupShowImage.open(name, link);
};

const handleCardDelete = (elem) => {
  popupDeleteCard.open();
  popupDeleteCard.returnElem(elem);
};

const addLike = (elem) => {
  return server.addLike(elem);
};

const deductLike = (elem) => {
  return server.deductLike(elem);
};

const popupDeleteCard = new PopupWithBtn({
  submitForm: (elem) => {
    server.deleteCardInfo(elem.getCardId())
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      })
      .then(() => {
        elem.removeCard();
      });
  }
}, popupDelete);

const popupAddCard = new PopupWithForm({
  submitForm: (obj) => {
    popupAddCard.loadingRequest(true);
    server.addCardInfo(obj)
      .then(result => {
        renderCard(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.loadingRequest(false);
      });
  },
}, popupCard);

const popupSetProfile = new PopupWithForm({
  submitForm: (obj) => {
    popupSetProfile.loadingRequest(true);
    server.patchUserInfo(obj)
      .then(result => {
        setUserInfo.setUserInfo(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupSetProfile.loadingRequest(false);
      });
  },
}, popupProfile);

const popupSetAvatar = new PopupWithForm({
  submitForm: (obj) => {
    popupSetAvatar.loadingRequest(true);
    server.changeAvatarUrl(obj)
      .then(result => {
        setUserInfo.setImgAvatar(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupSetAvatar.loadingRequest(false);
      });
  }
}, popupAvatar);

const setUserInfo = new UserInfo({
  nameSelector: profileName,
  professionSelector: profileProfession,
  avatarSelector: avatarImg
});

formValidationProfile.setEventListeners();
formValidationCard.setEventListeners();
formValidationAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
popupAddCard.setEventListeners();
popupShowImage.setEventListeners();
popupSetProfile.setEventListeners();
popupSetAvatar.setEventListeners();

server.getCardInfo()
  .then(result => {
    cardSection.rendererItems(result);
  });

server.getUserInfo()
  .then((result) => {
    setUserInfo.setUserInfo(result);
    setUserInfo.setImgAvatar(result);
    return userId = result._id;
  });

btnConditionFormCards.addEventListener('click', () => {
  formValidationCard.resetValidation();
  formValidationCard.disableButton();
  popupAddCard.open();
});

profileEditBtn.addEventListener('click', () => {
  formValidationProfile.resetValidation();
  formValidationProfile.disableButton();
  fullNameInput.value = setUserInfo.getUserInfo().name;
  professionInput.value = setUserInfo.getUserInfo().profession;
  popupSetProfile.open();
});

profileEditAvatar.addEventListener('click', () => {
  formValidationProfile.resetValidation();
  formValidationProfile.disableButton();
  popupSetAvatar.open();
});

