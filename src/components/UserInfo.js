export default class UserInfo {
  constructor({ nameSelector, professionSelector, avatarSelector }, data) {
    this._data = data;
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  returnUserId() {
    return this._data._id;
  }

  setImgAvatar(obj) {
    this._avatar.src = obj.avatar;
  }

  getUserInfo() {
    const profileInfo = {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };

    return profileInfo;
  }

  setUserInfo(obj) {
    this._name.textContent = obj.name;
    this._profession.textContent = obj.about;
  }
}
