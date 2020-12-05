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
        if (this.length === 0) {
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
        if (this.length === 0) {
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
    insertAtIndex(index, value) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid index");
        } else {
            if (index === 0) {
                this.prepend(value);
            } else if (index === this.length - 1) {
                this.append(value);
            } else {
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index);
                const newNode = new Node(prevNode, value, nextNode);
                prevNode.next = newNode;
                nextNode.prev = newNode;
                this.length++;
            }
        }
    }
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            console.log("Invalid index");
        } else {
            if (index === 0) {
                const newNode = this.traverseToIndex(1);
                this.head.next = null;
                this.head = newNode;
                this.head.prev = null;
                this.length--;
            } else if (index === this.length - 1) {
                const newNode = this.traverseToIndex(this.length - 2);
                newNode.next = null;
                this.tail.prev = null;
                this.tail = newNode;
                this.length--;
            } else {
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index + 1);
                const currNode = this.traverseToIndex(index);
                currNode.next = null;
                currNode.prev = null;
                nextNode.prev = prevNode;
                prevNode.next = nextNode;
                this.length--;
            }
        }
    }
    updateValueAtindex(index, value) {
        const currNode = this.traverseToIndex(index);
        currNode.value = value;
    }
    deleteAllNodeWithValue(value) {
        let currNode = this.head;
        while (currNode != null) {
            if (currNode.value === value) {
                if (currNode === this.head || currNode === this.tail) {
                    if (currNode === this.head) {
                        const newNode = this.traverseToIndex(1);
                        this.head.next = null;
                        newNode.prev = null;
                        this.head = newNode;
                        this.length--;
                    } else {
                        const newNode = this.traverseToIndex(this.length - 2);
                        newNode.next = null;
                        this.tail.prev = null;
                        this.tail = newNode;
                        this.length--;
                    }
                } else {
                    const prevNode = currNode.prev;
                    const nextNode = currNode.next;
                    currNode.prev = null;
                    currNode.next = null;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    currNode = prevNode;
                    this.length--;
                }
            }
            currNode = currNode.next;
        }
    }
    reverse() {
        let currendNode = this.head;
        for (let x = 0; x < this.length; x++) {
            this.prepend(currendNode.value);
            currendNode = currendNode.next;
            this.deleteAtIndex(x + 1);
        }
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
llist1.append(68);
llist1.append(57);
llist1.append(72);
llist1.append(72);
llist1.append(72);
llist1.append(72);
llist1.append(72);
llist1.append(72);
llist1.prepend(100);
llist1.insertAtIndex(2, 94);
llist1.deleteAtIndex(2);
llist1.updateValueAtindex(0, 71);
llist1.deleteAllNodeWithValue(72);
llist1.reverse();
console.log(llist1.print());
