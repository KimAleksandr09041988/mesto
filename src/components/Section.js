export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }

  rendererItems(items) {
    items.reverse().forEach(element => {
      this._renderer(element);
    });
  }
}
