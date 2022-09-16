var assert = require("chai").assert;
var { Customer } = require("./Customer.js");
var { Product } = require("./Product.js");

describe("Customer", function () {
  it.skip("should have a name", function () {
    var customer1 = new Customer("Adam Willson");
    var customer2 = new Customer("John Smith");

    assert.equal(customer1.name, "Adam Willson");
    assert.equal(customer2.name, "John Smith");
  });

  it.skip("should have a cash", function () {
    var customer1 = new Customer();
    var customer2 = new Customer("John Smith", 1000);

    assert.equal(customer1.cash, 0);
    assert.equal(customer2.cash, 1000);
  });

  it.skip("should have an empty cart by default", function () {
    var customer = new Customer("John Smith", 1000);

    assert.equal(customer.cart, []);
  });

  it.skip("should add products in the cart", function () {
    var customer = new Customer("John Smith", 1000);
    var oil = new Product("Mobil 1: Advanced Full Synthetic", 33.99);
    var battery = new Product("DieHard Red: Farm and Truck Battery", 78.99);

    oil.restock({ items: 10 });
    battery.restock({ items: 5 });
    customer.addToCart(oil, 2);
    customer.addToCart(battery, 1);

    assert.equal(customer.cart.length, 2);
    assert.instanceOf(customer.cart[0], Product);
    assert.deepEqual(customer.cart[0], {
      name: "Mobil 1: Advanced Full Synthetic",
      price: 33.99,
      purchased: 2,
      quantity: 10,
    });
  });

  it.skip("should add left number of items", function () {
    var customer = new Customer("John Smith", 1000);
    var screws = new Product("Hex Cap Screw", 4.99);

    screws.restock({ items: 10 });
    const message = customer.addToCart(screws, 12);

    assert.equal(message, "Only 10 items have been added.");
    assert.deepEqual(customer.cart[0], {
      name: "Hex Cap Screw",
      price: 4.99,
      purchased: 10,
      quantity: 10,
    });
  });

  it.skip("should show message if there is no items", function () {
    var customer = new Customer("John Smith", 1000);
    var screws = new Product("Hex Cap Screw", 4.99);

    const message = customer.addToCart(screws, 12);

    assert.equal(message, "Sorry! Hex Cap Screw is out of stock.");
    assert.deepEqual(customer.cart.length, 0);
  });

  it.skip("should calculate total sum", function () {
    var customer = new Customer("John Smith", 1000);
    var screws = new Product("Hex Cap Screw", 4.99);
    var oil = new Product("Mobil 1: Advanced Full Synthetic", 33.99);
    var battery = new Product("DieHard Red: Farm and Truck Battery", 78.99);

    screws.restock({ items: 100 });
    oil.restock({ items: 10 });
    battery.restock({ items: 5 });

    customer.addToCart(screws, 12);
    customer.addToCart(oil, 2);
    customer.addToCart(battery, 1);

    const totalToPay = customer.getTotal();

    assert.equal(totalToPay, 206.85);
  });
});
