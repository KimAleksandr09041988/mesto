export default class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
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
    this._profession.textContent = obj.profession;
  }
}
