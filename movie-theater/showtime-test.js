var assert = require("chai").assert;
var { Showtime } = require("./Showtime.js");

describe("Showtime", function () {
  it.skip("should have a movie name, rating and time", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    assert.equal(movieShowtime.movie, "Avatar");
    assert.equal(movieShowtime.rating, "PG-13");
    assert.equal(movieShowtime.time, "12.30pm");
  });

  it.skip("should have rows", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    assert.deepEqual(movieShowtime.rows.chair, []);
    assert.deepEqual(movieShowtime.rows.sofa, []);
  });

  it.skip("should reserve a seat", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    movieShowtime.reserveSeat("chair", 3);
    movieShowtime.reserveSeat("sofa", 2);

    assert.deepEqual(movieShowtime.rows.chair, [3]);
    assert.deepEqual(movieShowtime.rows.sofa, [2]);
  });

  it.skip("should reserve a seat only in range from 1 to 5", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    movieShowtime.reserveSeat("chair", 7);
    movieShowtime.reserveSeat("sofa", 2);
    movieShowtime.reserveSeat("chair", 0);

    assert.deepEqual(movieShowtime.rows.chair, []);
    assert.deepEqual(movieShowtime.rows.sofa, [2]);
  });

  it.skip("should not reserve a seat if seat is taken", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    movieShowtime.reserveSeat("chair", 3);
    movieShowtime.reserveSeat("chair", 3);

    assert.deepEqual(movieShowtime.rows.chair, [3]);
  });

  it.skip("should return seat price as 10 for chairs and 15 for sofas", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    var first = movieShowtime.reserveSeat("chair", 3);
    var second = movieShowtime.reserveSeat("sofa", 2);

    assert.equal(first, 10);
    assert.equal(second, 15);
  });

  it.skip("should not return price if seat is not reserved", function () {
    var movieShowtime = new Showtime("Avatar", "PG-13", "12.30pm");

    var price = movieShowtime.reserveSeat("chair", 7);

    assert.equal(price, undefined);
  });
});
