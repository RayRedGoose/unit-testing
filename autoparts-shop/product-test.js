var assert = require("chai").assert;
var { Product } = require("./Product.js");

describe("Product", function () {
  it.skip("should have a name", function () {
    var oil = new Product("Mobil 1: Advanced Full Synthetic");
    var battery = new Product("DieHard Red: Farm and Truck Battery");

    assert.equal(oil.name, "Mobil 1: Advanced Full Synthetic");
    assert.equal(battery.name, "DieHard Red: Farm and Truck Battery");
  });

  it.skip("should have a price", function () {
    var oil = new Product("Mobil 1: Advanced Full Synthetic", 33.99);
    var battery = new Product("DieHard Red: Farm and Truck Battery", 78.99);

    assert.equal(oil.price, 33.99);
    assert.equal(battery.price, 78.99);
  });

  it.skip("should have a quantity value", function () {
    var oil = new Product("Mobil 1: Advanced Full Synthetic");

    assert.equal(oil.quantity, 0);
  });

  it.skip("should restock items", function () {
    var oil = new Product("Mobil 1: Advanced Full Synthetic");

    oil.restock({ items: 110 });
    assert.equal(oil.quantity, 110);

    oil.restock({ items: 20 });
    assert.equal(oil.quantity, 130);
  });

  it.skip("should checkout items", function () {
    var oil = new Product("Mobil 1: Advanced Full Synthetic");

    oil.restock({ items: 10 });
    assert.equal(oil.quantity, 10);

    oil.checkout(2);
    assert.equal(oil.quantity, 8);
  });
});
