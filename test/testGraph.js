const assert = require("chai").assert;
const { bfs } = require("../src/graph");
const pairs = require("./pairs");

describe("bfs", function () {
  it("should return true if single node connected to itself", function () {
    assert.isTrue(bfs([["a", "a"]], "a", "a"));
  });

  it("should return false if single node not connected to itself", function () {
    assert.isFalse(bfs([["b", "a"]], "b", "b"));
  });

  it("should return true if path is possible and near to each other", function () {
    assert.isTrue(bfs(pairs, "a", "b"));
  });

  it("should return false if path is not possible between two nodes", function () {
    assert.isFalse(bfs(pairs, "b", "a"));
  });

  it("should return true if path is possible but far away from each other", function () {
    assert.isTrue(bfs(pairs, "a", "j"));
  });
});
