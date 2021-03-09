class Node {
    constructor(prev = null, value, next = null) {
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
            const newNode = new Node(this.tail, value);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    prepend(value) {
        if (this.length === 0) {
            this.head = new Node(null, value);
            this.tail = this.head;
            this.length++;
        } else {
            const newNode = new Node(null, value, this.head);
            this.head.prev = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    validate(index = null) {
        if (this.length === 0) {
            console.log("LinkedList is empty.");
            return false;
        } else if (index != null) {
            if (index < 0 || index > this.length) {
                console.log("Invalid index.");
                return false;
            } else {
                return true;
            }
        }
    }
    makeCircular() {
        this.head.prev = this.tail;
        this.tail.next = this.head;
    }
    isCircular() {
        let tempArray = [];
        let currNode = this.head;
        while (currNode != null) {
            if (tempArray.length > this.length) {
                return true;
            }
            tempArray.push(currNode.value);
            currNode = currNode.next;
        }
        return false;
    }
    decircularise() {
        this.head.prev = null;
        this.tail.next = null;
    }
    traverseToIndex(index) {
        let currNode = this.head;
        for (let x = 0; x < index; x++) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insertAtIndex(index, value) {
        if (this.validate(index)) {
            let circular = false;
            if (this.isCircular()) {
                circular = true;
                this.decircularise();
            } else {
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
            }
            if (circular) {
                this.makeCircular();
            }
        }
    }
    deleteAtIndex(index = False) {
        if (this.validate(index)) {
            if (index === 0) {
                const currNode = this.head;
                this.head = this.head.next;
                currNode.next = null;
                currNode.prev = null;
                this.head.prev = null;
                this.length--;
            } else if (index === this.length - 1) {
                const currNode = this.tail;
                this.tail = this.tail.prev;
                currNode.prev = null;
                currNode.next = null;
                this.tail.next = null;
                this.length--;
            } else {
                let circular;
                if (this.isCircular()) {
                    this.decircularise();
                    circular = true;
                }
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index + 1);
                const currNode = this.traverseToIndex(index);
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                currNode.next = null;
                currNode.prev = null;
                if (circular) {
                    this.makeCircular();
                }
                this.length--;
            }
        }
    }
    deleteAllNodesWithValue(value) {
        if (this.validate) {
            let circular = false;
            if (this.isCircular()) {
                circular = true;
                this.decircularise();
            }
            let currNode = this.head;
            while (currNode !== null) {
                if (currNode.value === value) {
                    if (currNode === this.head) {
                        this.deleteAtIndex(0);
                    } else if (currNode === this.tail) {
                        currNode = this.tail.prev;
                        this.tail.prev = null;
                        currNode.next = null;
                        this.tail = currNode;
                        this.length--;
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
    }
    reverse() {
        let circular = false;
        if (this.isCircular()) {
            circular = true;
            this.decircularise();
        } else {
            let currNode = this.head;
            for (let x = 0; x < this.length; x++) {
                console.log("Here");
                this.prepend(currNode.value);
                this.deleteAtIndex(x + 1);
                currNode = currNode.next;
            }
            if (circular) {
                this.makeCircular();
            }
        }
    }
    show() {
        let currNode = this.head;
        let linkedList = {};
        for (let x = 0; x < this.length; x++) {
            linkedList[x] = currNode.value;
            currNode = currNode.next;
        }
        return linkedList;
    }
}

const llist1 = new LinkedList();
llist1.append(24);
llist1.append(68);
llist1.append(39);
llist1.prepend(91);
llist1.insertAtIndex(4, 100);
llist1.deleteAtIndex(2);
llist1.append(600);
llist1.append(600);
llist1.append(600);
llist1.append(600);
llist1.append(600);
llist1.deleteAllNodesWithValue(600);
llist1.reverse();
console.log(llist1.show());
