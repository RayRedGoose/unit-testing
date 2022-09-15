var assert = require("chai").assert;
var { Customer } = require("./Customer.js");

describe("Customer", function () {
  it.skip("should have a name", function () {
    var guest = new Customer();
    var ivan = new Customer("Ivan Smith");

    assert.equal(guest.name, "Guest");
    assert.equal(ivan.name, "Ivan Smith");
  });
});
