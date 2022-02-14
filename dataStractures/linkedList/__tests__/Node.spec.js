const Node = require("../Node");

describe("Node Class", () => {
  it("Should Create a Node", () => {
    const node = new Node(2);
    expect(node.next).toBe(null);
    expect(node.value).toBe(2);
  });
});
