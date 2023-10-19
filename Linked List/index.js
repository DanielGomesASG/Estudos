class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Iterar pela linked list
  forEach(callback) {
    let current = this.head;

    while (current) {
      callback(current.value);
      current = current.next;
    }
  }
}

const lista = new LinkedList();
lista.append(1);
lista.append(2);
lista.append(3);

// Iterar e imprimir os valores da lista
lista.forEach((value) => {
  console.log(value);
});
