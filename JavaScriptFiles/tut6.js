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
        if (index > this.length || index < 0) {
            return false;
        } else {
            return true;
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
        if (this.legalIndex(index)) {
            if (index === 0) {
                this.prepend(value);
            } else if (index === this.length) {
                this.append(value);
            } else {
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index + 1);
                const newNode = new Node(prevNode, value, nextNode);
                prevNode.next = newNode;
                nextNode.prev = newNode;
                this.length++;
            }
        } else {
            console.log("Enter legal index");
        }
    }
    startPop() {
        const nextNode = this.head.next;
        this.head.next = null;
        nextNode.prev = null;
        this.head = nextNode;
        this.length--;
    }
    pop() {
        const prevNode = this.tail.prev;
        this.tail.prev = null;
        prevNode.next = null;
        this.tail = prevNode;
        this.tail--;
    }
    deleteAtIndex(index) {
        if (this.legalIndex(index)) {
            if (index === 0) {
                this.startPop();
            } else if (index === this.length) {
                this.pop();
            } else {
                const currNode = this.traverseToIndex(index);
                currNode.next = null;
                currNode.prev = null;
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index + 1);
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }
        } else {
            console.log("Enter legal index");
        }
    }
    deleteAllNodeWithValue(value) {
        let currNode = this.head;
        let indexOfNodes = [];
        let counter = 0;
        while (currNode !== null) {
            if (currNode.value === value) {
                indexOfNodes.push(counter);
            } 
            currNode = currNode.next;
            counter++;
        }
        for (let x = 0; x < indexOfNodes.length; x++) {
            this.deleteAtIndex(indexOfNodes[x]);
        }
    }
    show() {
        let currNode = this.head;
        let ans = [];
        while (currNode !== null) {
            ans.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(ans);
    }
}

const llist1 = new LinkedList(1);
llist1.append(2);
llist1.append(3);
llist1.append(4);
llist1.append(4);
llist1.append(4);
llist1.insertAtIndex(1, 100);
llist1.deleteAtIndex(0);
llist1.deleteAllNodeWithValue(4);
llist1.show();
