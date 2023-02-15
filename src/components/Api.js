export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      }
      );
  }

  patchUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        about: obj.about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      });
  }

  getCardInfo() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      });
  }

  addCardInfo(obj) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      });
  }

  deleteCardInfo(elem) {
    return fetch(`${this._url}/cards/${elem}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  addLike(elem) {
    return fetch(`${this._url}/cards/${elem}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      });
  }

  deductLike(elem) {
    return fetch(`${this._url}/cards/${elem}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      });
  }

  changeAvatarUrl(obj) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject((`Ошибка: ${res.status}`));
        }
      });
  }
}
