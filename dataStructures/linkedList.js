class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.length = 1;
        this.index = 1;
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
    }
    appendData(value) {
        let newNode = new Node(value, null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.index++;
        this.length++;
    }
    prepend(value) {
        let newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }
    show() {
        let curNode = this.head;
        while (curNode.next != null) {
            console.log(`${curNode.value}`);
            curNode = curNode.next;
        }
        console.log(`${curNode.value}`);
    }
    traverseToIndex(index) {
        let counter = 0;
        let currendNode = this.head;
        while (counter != index) {
            currendNode = currendNode.next;
            counter++;
        }
        return currendNode;
    }
    insert(index, value) {
        if (index >= this.length) {
            this.appendData(value);
        } else {
            let newNode = new Node(value);
            const leader = this.traverseToIndex(index - 1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdingPointer;
            this.length++;
        }
    }
    validIndex(index) {
        if (index >= this.length || index < 0) {
            return false;
        } else {
            return true;
        }
    }
    deleteAtIndex(index) {
        if (this.validIndex(index)) {
            const delNode = this.traverseToIndex(index);
            if (this.isHead(index)) {
                const newHeadNode = this.traverseToIndex(index + 1);
                this.head = newHeadNode;
                delNode.next = null;
            } else if (this.isTail(index)) {
                const prevNode = this.traverseToIndex(index - 1);
                const newTailNode = this.traverseToIndex(this.length - 2);
                this.tail = newTailNode;
                prevNode.next = null;
            } else {
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index + 1);
                prevNode.next = nextNode;
                delNode.next = null;
            }
            this.length--;
        } else {
            console.log("Index Not valid");
        }
    }
    isHead(index) {
        return index == 0;
    }
    isTail(index) {
        return index == this.length - 1;
    }
    updateValueAtIndex(index, value) {
        if (this.validIndex(index)) {
            const updateNode = this.traverseToIndex(index);
            updateNode.value = value;
        } else {
            console.log("Invalid Index");
        }
    }
}

let llist1 = new LinkedList(1);
llist1.appendData(2);
llist1.appendData(3);
llist1.appendData(4);
llist1.appendData(5);
llist1.appendData(6);
// llist1.deleteAtIndex(3);
llist1.updateValueAtIndex(0, "Kshitij");
llist1.show();
