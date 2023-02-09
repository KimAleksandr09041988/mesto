export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._containerSelector.prepend(element);
  }

  rendererItems() {
    this._items.forEach(element => {
      this._renderer(element);
    });
  }
}
