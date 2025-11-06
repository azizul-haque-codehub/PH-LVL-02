// LIFO (Last In, First Out) -> principle of stack DS

class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    if(this.isEmpty()) return "UnderFlow"
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty(){
    return this.items.length === 0
  }
  print() {
    console.log(this.items?.join("<-"));
  }
}

const numberStack = new Stack()
numberStack.push(1)
numberStack.push(2)
numberStack.push(3)
// numberStack.print()

numberStack.pop()
numberStack.pop()
console.log(numberStack.pop());
console.log(numberStack.pop());
numberStack.print()
// console.log(numberStack.peek());


