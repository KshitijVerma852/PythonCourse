class Node {
    constructor(prev, value, next) {
        this.prev = prev;
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(null, value, null);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(this.tail, value, null);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(null, value, this.head);
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }
    legalIndex(index) {
        if (index < 0 || index > this.length) {
            return false;
        } else {
            return true;
        }
    }
    traverseToIndex(index) {
        if (index === 0) {
            let currNode = this.head;
            return currNode;
        } else if (index === this.length - 1) {
            let currNode = this.tail;
            return currNode;
        } else {
            let currNode = this.head;
            for (let x = 0; x < index; x++) {
                currNode = currNode.next;
            }
            return currNode;
        }
    }
    insertAtIndex(index, value) {
        if (this.legalIndex(index)) {
            if (index === 0) {
                this.prepend(value);
            } else if (index === this.length) {
                this.append(value);
            } else {
                const nextNode = this.traverseToIndex(index);
                const prevNode = this.traverseToIndex(index - 1);
                prevNode.next = null;
                nextNode.prev = null;
                const newNode = new Node(prevNode, value, nextNode);
                prevNode.next = newNode;
                nextNode.prev = newNode;
                this.length++;
            }
        } else {
            console.log("Enter a valid index.");
        }
    }
    deleteFirstNode() {
        const currNode = this.head.next;
        this.head.next = null;
        this.head = currNode;
        this.head.prev = null;
        this.length--;
    }
    deleteLastNode() {
        const currNode = this.tail.prev;
        this.tail.prev = null;
        this.tail = currNode;
        this.tail.next = null;
        this.length--;
    }
    deleteAtIndex(index) {
        if (this.legalIndex(index)) {
            if (index === 0) {
                this.deleteFirstNode();
            } else if (index === this.length - 1) {
                this.deleteLastNode();
            } else {
                const indexNode = this.traverseToIndex(index);
                const prevNode = indexNode.prev;
                const nextNode = indexNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                indexNode.prev = null;
                indexNode.next = null;
            }
        } else {
            console.log("Invalid index");
        }
    }
    deleteAllNodeWithValue(value) {
        let currendNode = this.head;
        while (currendNode != null) {
            if (currendNode.value === value) {
                if (currendNode === this.head) {
                    this.head = currendNode.next;
                    this.deleteAtIndex(0);
                } else if (currendNode === this.tail) {
                    this.deleteAtIndex(this.length - 1);
                } else {
                    const prevNode = currendNode.prev;
                    const nextNode = currendNode.next;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    currendNode = prevNode;
                    this.length--;
                }
            }
            currendNode = currendNode.next;
        }
    }
    show() {
        let ans = [];
        let currNode = this.head;
        while (currNode !== null) {
            ans.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(ans);
    }
}

llist1 = new LinkedList(54);
llist1.append(23);
llist1.append(23452);
llist1.append(256765);
llist1.insertAtIndex(3, 100);
llist1.deleteFirstNode();
llist1.deleteLastNode();
llist1.deleteAtIndex(1);
llist1.append(23);
llist1.append(23); 
llist1.append(23);
llist1.append(23);
llist1.append(1);
llist1.deleteAllNodeWithValue(23);
llist1.show();
