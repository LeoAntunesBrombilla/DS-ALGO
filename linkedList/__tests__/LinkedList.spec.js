const LinkedList = require("../LinkedList");
const Node = require("../Node");

describe("LinkedList", () => {
  it("should create a Linked List", () => {
    const linkedList = new LinkedList(3);
    const node = new Node(3);
    expect(linkedList.head).toStrictEqual(node);
    expect(linkedList.tail).toBe(linkedList.head);
    expect(linkedList.length).toBe(1);
  });

  it("PUSH - should create a new Node when linkedList has a node already", () => {
    const linkedList = new LinkedList(3);
    linkedList.push(5);
    expect(linkedList.tail).toStrictEqual(new Node(5));
    expect(linkedList.tail.next).toStrictEqual(null);
    expect(linkedList.length).toBe(2);
  });

  it("PUSH - should create a new Node when linkedList when head and tail points to null", () => {
    const linkedList = new LinkedList();
    linkedList.head = null;
    linkedList.tail = null;
    linkedList.length = 0;

    linkedList.push(5);

    expect(linkedList.tail).toStrictEqual(new Node(5));
    expect(linkedList.tail.next).toBe(null);
    expect(linkedList.length).toBe(1);
  });

  it("POP - should return undefined when LinkedList is empty", () => {
    const linkedList = new LinkedList();
    linkedList.head = null;
    linkedList.tail = null;
    linkedList.length = 0;

    const result = linkedList.pop(5);

    expect(linkedList.tail).toBe(null);
    expect(linkedList.head).toBe(null);
    expect(linkedList.length).toBe(0);
    expect(result).toBe(undefined);
  });

  it("POP - should delete a Node when linkedList has more than two Nodes", () => {
    let myLinkedList = new LinkedList(1);
    myLinkedList.push(2);

    const result = myLinkedList.pop();

    expect(result).toStrictEqual(new Node(2));
    expect(myLinkedList.length).toBe(1);
  });

  it("POP - should set head and tail to null a Node when linkedList has one Node", () => {
    let myLinkedList = new LinkedList(1);

    myLinkedList.pop();

    expect(myLinkedList.head).toBe(null);
    expect(myLinkedList.tail).toBe(null);
  });

  it("UNSHIFT - should add a new Node to the beggining of the LinkedList with more than one Node", () => {
    let myLinkedList = new LinkedList(1);

    myLinkedList.push(2);
    myLinkedList.push(5);
    myLinkedList.push(1);

    myLinkedList.unshift(3);

    expect(myLinkedList.head.value).toBe(3);
    expect(myLinkedList.length).toBe(5);
  });

  it("UNSHIFT - should add a new Node to the beggining of the LinkedList with 0 Nodes", () => {
    let myLinkedList = new LinkedList(1);

    myLinkedList.head = null;
    myLinkedList.tail = null;
    myLinkedList.length = 0;

    myLinkedList.unshift(3);

    expect(myLinkedList.head.value).toBe(3);
    expect(myLinkedList.length).toBe(1);
  });

  it("SHIFT - return undefined if LinkedList is empty", () => {
    let myLinkedList = new LinkedList(2);

    myLinkedList.head = null;
    myLinkedList.tail = null;
    myLinkedList.length = 0;

    const result = myLinkedList.shift();

    expect(result).toBe(undefined);
    expect(myLinkedList.length).toBe(0);
  });

  it("SHIFT - should add a remove the first Node", () => {
    let myLinkedList = new LinkedList(2);

    myLinkedList.push(1);

    myLinkedList.shift();

    expect(myLinkedList.head).toStrictEqual(new Node(1));
    expect(myLinkedList.length).toBe(1);
  });

  it("SHIFT - should point tail to null if LinkedList length is 0", () => {
    let myLinkedList = new LinkedList(2);

    myLinkedList.shift();

    expect(myLinkedList.length).toBe(0);
    expect(myLinkedList.tail).toBe(null);
  });

  it("GET - should find the respective Node in relation to the index", () => {
    const myLinkedList = new LinkedList(3);
    myLinkedList.push(4);
    myLinkedList.push(2);
    myLinkedList.push(5);

    const result = myLinkedList.get(2);

    expect(result.value).toBe(2);
    expect(result.next).toStrictEqual(new Node(5));
  });

  it("GET - should return undefined if index < 0", () => {
    const myLinkedList = new LinkedList(3);
    myLinkedList.push(4);
    myLinkedList.push(2);
    myLinkedList.push(5);

    const result = myLinkedList.get(-1);

    expect(result).toBe(undefined);
  });

  it("GET - should return undefined if index is out of bound", () => {
    const myLinkedList = new LinkedList(3);
    myLinkedList.push(4);
    myLinkedList.push(2);
    myLinkedList.push(5);

    const result = myLinkedList.get(100);

    expect(result).toBe(undefined);
  });

  it("SET - should return true and set the value if has the Node", () => {
    const myLinkedList = new LinkedList(2);

    myLinkedList.push(4);
    myLinkedList.push(2);
    myLinkedList.push(5);

    const result = myLinkedList.set(2, 100);

    expect(result).toBe(true);
    expect(myLinkedList.get(2).value).toBe(100);
  });

  it("SET - should return false and Not set the value if index is out of bounds", () => {
    const myLinkedList = new LinkedList(2);

    myLinkedList.push(4);
    myLinkedList.push(2);
    myLinkedList.push(5);

    const result = myLinkedList.set(-6, 100);

    expect(result).toBe(false);
    expect(myLinkedList.get(2).value).toBe(2);
  });
});
