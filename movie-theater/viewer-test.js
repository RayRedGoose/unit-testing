var assert = require("chai").assert;
var { Viewer } = require("./Viewer.js");
var { Showtime } = require("./Showtime.js");

describe("Viewer", function () {
  it.skip("should have a name and age", function () {
    const idCard = { firstName: "John", lastName: "Smith", age: 18 };
    const viewer = new Viewer(idCard);

    assert.equal(viewer.name, "John Smith");
    assert.equal(viewer.age, 18);
  });

  it.skip("should be without parent by default", function () {
    const idCard = { firstName: "John", lastName: "Smith", age: 18 };
    const viewer = new Viewer(idCard);

    assert.equal(viewer.isWithParent, false);
  });

  it.skip("should be with parent after inviting them", function () {
    const idCard = { firstName: "John", lastName: "Smith", age: 15 };
    const viewer = new Viewer(idCard);

    viewer.inviteParent();

    assert.equal(viewer.isWithParent, true);
  });

  it.skip("should check possibility to watch movie", function () {
    /* 
        Movie Ratings: 
        G: All ages admitted.
        PG-13: restricted under 13.
        R: Restricted under 17 without parents.
        NC-17: Adults Only – No one 17 and under admitted.
    */

    var movieShowtime = new Showtime("Deadpool", "R", "8.00pm");
    const viewer1 = new Viewer({
      firstName: "Ann",
      lastName: "James",
      age: 15,
    });
    const viewer2 = new Viewer({
      firstName: "John",
      lastName: "Smith",
      age: 18,
    });

    assert.equal(viewer1.checkMovie(movieShowtime), false);
    assert.equal(viewer2.checkMovie(movieShowtime), true);

    viewer.inviteParent();

    assert.equal(viewer1.checkMovie(movieShowtime), true);
  });
});
