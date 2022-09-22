var assert = require("chai").assert;
var { Video } = require("./Video.js");
var { List } = require("./List.js");

describe("List class", () => {
  it.skip("should have user name", () => {
    var userList = new List("dalnoboy");
    assert.equal(userList.user, "dalnoboy");
  });

  it.skip("should have interests", () => {
    var dalnoboy = new List("dalnoboy");
    assert.deepEqual(dalnoboy.interests, []);

    var dobrbobr = new List("dobrbobr", ["cat", "development"]);
    assert.deepEqual(dobrbobr.interests, ["cat", "development"]);
  });

  it.skip("should like video and add it to liked list", () => {
    var userList = new List("dalnoboy");
    var video = new Video({
      fileName: "How to create your portfolio website",
      time: "2:10:45",
      author: "devhard",
    });

    assert.equal(userList.liked.length, 0);

    userList.likeVideo(video);

    assert.equal(userList.liked.length, 1);
    assert.instanceOf(userList.liked[0], Video);
    assert.equal(video.reactions.likes, 1);
  });

  it.skip("should save video to watch later list", () => {
    var userList = new List("dalnoboy");
    var video1 = new Video({
      fileName: "How to create your portfolio website",
      time: "2:10:45",
      author: "devhard",
    });

    var video2 = new Video({
      fileName: "JS foundation: Array",
      time: "25:45",
      author: "devhard",
    });

    assert.equal(userList.watchLater.length, 0);

    userList.saveVideo(video1);
    userList.saveVideo(video2);

    assert.equal(userList.watchLater.length, 2);
    assert.instanceOf(userList.watchLater[0], Video);
    assert.deepEqual(userList.watchLater[0], {
      tags: [],
      title: "JS foundation: Array by devhard",
      time: "25:45",
      reactions: { likes: 0, dislikes: 0 },
      savedBy: ["dalnoboy"],
    });

    assert.deepEqual(video1.savedBy, ["dalnoboy"]);
  });

  it.skip("should upload a new video", () => {
    var userList = new List("dalnoboy");

    assert.equal(userList.uploaded.length, 0);

    userList.uploadVideo();

    assert.equal(userList.liked.length, 1);
    assert.instanceOf(userList.liked[0], Video);
    assert.equal(video.reactions.likes, 1);
  });

  // ** BACK TO VIDEO TESTS AND SOLVE LEFT TESTS**
  // ** START THE BELOW TESTS ONLY AFTER VIDEO FULLY COMPLITED**

  it.skip("should add video to recommendations if video is hot", () => {
    var userList = new List("dalnoboy", ["cat", "development"]);
    var video = new Video({
      fileName: "How to create your portfolio website",
      time: "2:10:45",
      author: "devhard",
      tags: ["development"],
    });

    assert.equal(userList.recommended.length, 0);
    userList.recommendVideo(video);

    assert.equal(userList.recommended.length, 0);
    video.initiateBotAttack("like", 100);
    userList.recommendVideo(video);

    assert.equal(userList.recommended.length, 1);
    assert.equal(
      userList.recommended[0].title,
      "How to create your portfolio website by devhard"
    );
  });

  it.skip("should add video to recommendations if video matches user interests", () => {
    var userList = new List("dalnoboy", ["development", "cars"]);
    var devVideo = new Video({
      fileName: "How to create your portfolio website",
      time: "2:10:45",
      author: "devhard",
      tags: ["development"],
    });

    var catVideo = new Video({
      fileName: "Funny Cats",
      time: "2:45",
      author: "catninja",
      tags: ["cat"],
    });

    devVideo.initiateBotAttack("like", 100);
    userList.recommendVideo(devVideo);

    assert.equal(userList.recommended.length, 1);
    assert.equal(
      userList.recommended[0].title,
      "How to create your portfolio website by devhard"
    );

    catVideo.initiateBotAttack("like", 100);
    userList.recommendVideo(catVideo);

    assert.equal(userList.recommended.length, 1);
    assert.equal(
      userList.recommended[0].title,
      "How to create your portfolio website by devhard"
    );
  });
});
