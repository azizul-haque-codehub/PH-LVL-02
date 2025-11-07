class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  get print() {
    console.log(this.items);
  }
}

const visitorLine = new Queue();
visitorLine.enqueue(1);
visitorLine.enqueue(2);
visitorLine.enqueue(3);
console.log(visitorLine.peek());
console.log(visitorLine.dequeue());
visitorLine.print;
