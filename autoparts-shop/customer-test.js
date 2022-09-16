var assert = require("chai").assert;
var { Customer } = require("./Customer.js");
var { Product } = require("./Product.js");

describe("Customer", function () {
  it.skip("should have a name", function () {
    var customer1 = new Customer({ name: "Adam Willson" });
    var customer2 = new Customer({ name: "John Smith" });

    assert.equal(customer1.name, "Adam Willson");
    assert.equal(customer2.name, "John Smith");
  });

  it.skip("should have a cash", function () {
    var customer1 = new Customer({ name: "Adam Willson" });
    var customer2 = new Customer({ name: "John Smith", cardBalance: 1000 });

    assert.equal(customer1.cash, 0);
    assert.equal(customer2.cash, 1000);
  });

  it.skip("should have an empty cart by default", function () {
    var customer = new Customer({ name: "John Smith", cardBalance: 1000 });

    assert.deepEqual(customer.cart, []);
  });

  it.skip("should add products in the cart", function () {
    var customer = new Customer({ name: "John Smith", cardBalance: 1000 });
    var oil = new Product("Mobil 1: Advanced Full Synthetic", 33);

    oil.restock({ items: 10 });
    customer.addToCart(oil, 2);

    assert.equal(customer.cart.length, 1);
    assert.instanceOf(customer.cart[0], Product);
    assert.deepEqual(customer.cart[0], {
      name: "Mobil 1: Advanced Full Synthetic",
      price: 33,
      purchased: 2,
      quantity: 10,
    });
  });

  it.skip("should not add items if there is not enough", function () {
    var customer = new Customer({ name: "John Smith", cardBalance: 1000 });
    var screws = new Product("Hex Cap Screw", 4);

    screws.restock({ items: 10 });
    const message = customer.addToCart(screws, 12);

    assert.equal(customer.cart.length, 0);
    assert.equal(
      message,
      "You can't add 12 items to the cart. 10 items of Hex Cap Screw left."
    );
  });

  it.skip("should calculate total sum", function () {
    var customer = new Customer({ name: "John Smith", cardBalance: 1000 });
    var screws = new Product("Hex Cap Screw", 4);
    var oil = new Product("Mobil 1: Advanced Full Synthetic", 33);
    var battery = new Product("DieHard Red: Farm and Truck Battery", 78);

    screws.restock({ items: 100 });
    oil.restock({ items: 10 });
    battery.restock({ items: 5 });

    customer.addToCart(screws, 12);
    customer.addToCart(oil, 2);
    customer.addToCart(battery, 1);

    const totalToPay = customer.getTotal();

    assert.equal(totalToPay, 192);
  });

  it.skip("BONUS: should remove items from cart", function () {
    var customer = new Customer({ name: "John Smith", cardBalance: 1000 });
    var screws = new Product("Hex Cap Screw", 4);
    var oil = new Product("Mobil 1: Advanced Full Synthetic", 33);

    screws.restock({ items: 100 });
    oil.restock({ items: 10 });

    customer.addToCart(screws, 50);
    customer.addToCart(oil, 1);

    customer.removeFromCart("Mobil 1: Advanced Full Synthetic", 1);

    assert.equal(customer.cart.length, 1);
    assert.equal(customer.cart[0].name, "Hex Cap Screw");
  });

  it.skip("BONUS: should decrease quantity of items", function () {
    var customer = new Customer({ name: "John Smith", cardBalance: 1000 });
    var screws = new Product("Hex Cap Screw", 4);

    screws.restock({ items: 100 });
    customer.addToCart(screws, 50);
    customer.removeFromCart("Hex Cap Screw", 25);

    assert.equal(customer.cart.length, 1);
    assert.deepEqual(customer.cart[0], {
      name: "Hex Cap Screw",
      price: 4,
      purchased: 25,
      quantity: 100,
    });
  });
});
