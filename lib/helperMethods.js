'use strict';


class Queue {

  constructor() {
    this.length = 0;
  }


  enqueue(item) {
    this[this.length++] = item;
    return this.length;
  }
  

  dequeue() {
    this[this.length--];
    delete this[this.length];
    return this;
  }
  

}

class Stack {
  push(item) {
    this[this.length++] = item;//?
    return this.length;
  }


  pop() {
    this[this.length--];
    delete this[this.length];
    return this;
  }

}

export default {
  Queue,
  Stack,
};