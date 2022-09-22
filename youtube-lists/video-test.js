var assert = require("chai").assert;
var { Video } = require("./Video.js");

describe("Video class", function () {
  it.skip("should have name and time", () => {
    var upload1 = { fileName: "Funny Cats", time: "2:45", author: "catninja" };
    var upload2 = { fileName: "Fallout 4", time: "22:51", author: "gamer123" };

    var video1 = new Video(upload1);
    var video2 = new Video(upload2);

    assert.equal(video1.title, "Funny Cats by catninja");
    assert.equal(video1.time, "2:45");

    assert.equal(video2.title, "Fallout 4 by gamer123");
    assert.equal(video2.time, "22:51");
  });

  it.skip("should have tags", () => {
    var video1 = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
    });
    assert.deepEqual(video1.tags, []);

    var video2 = new Video({
      fileName: "How to create your portfolio website",
      time: "2:10:45",
      author: "devhard",
      tags: ["development", "tutorial"],
    });
    assert.deepEqual(video2.tags, ["development", "tutorial"]);
  });

  it.skip("should not have likes and dislikes after posting", () => {
    var upload = { fileName: "Fallout", time: "2:51", author: "gamer123" };
    var video = new Video(upload);

    assert.deepEqual(video.reactions, { likes: 0, dislikes: 0 });
  });

  it.skip("should change likes and dislikes number", () => {
    // You have to do not use if/else for this function
    var video = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
    });

    video.addReaction("like");
    video.addReaction("like");
    assert.equal(video.reactions.likes, 2);

    video.addReaction("dislike");
    video.addReaction("dislike");
    video.addReaction("dislike");
    assert.equal(video.reactions.dislikes, 3);
  });

  it.skip("should have bot attack", () => {
    var video = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
    });

    video.initiateBotAttack("like", 10);
    assert.equal(video.reactions.likes, 10);

    video.initiateBotAttack("dislike", 5);
    assert.equal(video.reactions.dislikes, 5);
  });

  // ** START TO SOLVE THE NEXT TESTS ONLY IF **
  // ** YOU SOLVE NECESSARY TESTS FROM LIST **
  it.skip("should be hot if there are more than 75% of likes", () => {
    var video = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
    });

    video.initiateBotAttack("like", 95);
    video.initiateBotAttack("dislike", 5);
    var result1 = video.getRating();
    assert.equal(video.rating, "hot");
    assert.equal(result1, "Funny Cats by catninja is hot video");
  });

  it.skip("should be ok if there are still more than 50% likes", () => {
    var video = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
    });

    video.initiateBotAttack("like", 55);
    video.initiateBotAttack("dislike", 45);
    var result1 = video.getRating();
    assert.equal(video.rating, "ok");
    assert.equal(result1, "Funny Cats by catninja is ok video");
  });

  it.skip("should be POS if there are more dislikes than likes", () => {
    var video = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
    });

    video.initiateBotAttack("like", 10);
    video.initiateBotAttack("dislike", 55);
    var result1 = video.getRating();
    assert.equal(video.rating, "POS");
    assert.equal(result1, "Funny Cats by catninja is POS video");
  });
});
