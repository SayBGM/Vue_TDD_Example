const _products = [
  {
    "id": 1,
    "title": "iPad 4 Mini",
    "price": 550.03,
    "inventory": 3
  },
  {
    "id": 2,
    "title": "Pewww T-Shirt",
    "price": 12.99,
    "inventory": 10
  },
  {
    "id": 3,
    "title": "XCX-CD",
    "price": 121.47,
    "inventory": 5
  }
];

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}