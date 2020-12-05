class Node {
    constructor(prev, value, next) {
        this.prev = prev;
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(null, value, null);
            this.tail = this.head;
            this.length++;
        } else {
            const newNode = new Node(this.tail, value, null);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(null, value, null);
            this.tail = this.head;
            this.length++;
        } else {
            const newNode = new Node(null, value, this.head);
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
    }

    traverseToIndex(index) {
        let currNode = this.head;
        for (let x = 0; x < index; x++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    legalIndex(index) {
        if (index > this.length || index < 0) {
            return false;
        } else {
            return true;
        }
    }

    insertAtIndex(index, value) {
        if (this.legalIndex(index)) {
            if (index === 0) {
                this.prepend(value);
            } else if (index === this.length) {
                this.append(value);
            } else {
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index);
                const newNode = new Node(prevNode, value, nextNode);
                prevNode.next = newNode;
                nextNode.prev = newNode;
                this.length++;
            }
        } else {
            console.log("Not a valid index.");
        }
    }

    deleteAtIndex(index) {
        if (this.legalIndex(index)) {
            if (this.length > 0) {
                if (index === 0) {
                    this.head = this.head.next;
                    this.head.prev = null;
                    this.length--;
                } else if (index === this.length - 1) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    this.length--;
                } else {
                    const delNode = this.traverseToIndex(index);
                    const prevNode = this.traverseToIndex(index - 1);
                    const nextNode = this.traverseToIndex(index + 1);
                    prevNode.next = nextNode;
                    nextNode.prev = nextNode;
                    delNode.next = null;
                    delNode.prev = null;
                    this.length--;
                }
            } else {
                console.log("Linked List is currently empty.");
            }
        } else {
            console.log("Not a legal index.");
        }
    }

    deleteAllNodesWithValue(value) {
        if (this.length > 0) {
            let currNode = this.head;
            while (currNode !== null) {
                if (currNode.value === value) {
                    if (currNode === this.head) {
                        this.head = this.head.next;
                        this.head.prev = null;
                        this.length--;
                    } else if (currNode === this.tail) {
                        this.tail = this.tail.prev;
                        this.tail.next = null;
                        this.length--;
                    } else {
                        const prevNode = currNode.prev;
                        const nextNode = currNode.next;
                        prevNode.next = nextNode;
                        nextNode.prev = prevNode;
                        currNode = prevNode;
                        this.length--;
                    }
                }
                currNode = currNode.next;
            }
        } else {
            console.log("Linked List is currently empty.");
        }
    }

    makeCircular() {
        this.tail.next = this.head;
        this.head.prev = this.tail;
    }

    isCicular() {
        let tempArray = [];
        let currNode = this.head;
        while (currNode !== null) {
            if (tempArray.length > this.length) {
                return true;
            }
            tempArray.push(currNode.value);
            currNode = currNode.next;
        }
        return false;
    }

    updateValueAtIndex(index, value) {
        if (this.length > 0) {
            this.traverseToIndex(index).value = value;
        } else {
            console.log("Linked List is empty.");
        }
    }

    linearSearch(value) {
        let currNode = this.head;
        while (currNode != null) {
            if (currNode.value === value) {
                return true;
            } else {
                currNode = currNode.next;
            }
        }
        return false;
    }

    print() {
        let currNode = this.head;
        let ans = {};
        for (let x = 0; x < this.length; x++) {
            ans[x] = currNode.value;
            currNode = currNode.next;
        }
        return ans;
    }
}

const llist1 = new LinkedList();
llist1.append(23);
llist1.append(45);
llist1.append(45);
llist1.append(79);
llist1.insertAtIndex(1, 100);
llist1.append(45);
llist1.insertAtIndex(1, 64);
llist1.deleteAtIndex(0);
llist1.append(45);
llist1.deleteAtIndex(3);
llist1.append(45);
llist1.prepend(45);
llist1.deleteAllNodesWithValue(45);
llist1.updateValueAtIndex(1, 80);
console.log(llist1.print());
