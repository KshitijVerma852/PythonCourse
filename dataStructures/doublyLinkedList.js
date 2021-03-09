class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value, null, null);
        this.tail = this.head;
        this.length = 1;
    }
    show() {
        let ans = [];
        let currentNode = this.head;
        for (let x = 0; x < this.length; x++) {
            ans.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return ans;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.tail = newNode;
        this.length++;
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
    insertAtIndex(index, value) {
        if (this.legalIndex(index)) {
            if (index === 0) {
                this.prepend(value);
            } else if (index === this.length - 1) {
                this.append(value);
            } else {
                const prevNode = this.traverseToIndex(index - 1);
                const nextNode = this.traverseToIndex(index + 1);
                const newNode = new Node(value, nextNode, prevNode);
                prevNode.next = newNode;
                nextNode.prev = newNode;
            }
        }
    }
    legalIndex(index) {
        if (index < 0 || index >= this.length) {
            return false;
        } else {
            return true;
        }
    }
    deleteAtIndex(index) {
        if (this.legalIndex(index)) {
            if (index === 0) {
                const afterNode = this.traverseToIndex(index + 1);
                this.head.next = null;
                afterNode.prev = null;
                this.head = afterNode;
                this.length--;
            } else if (index === this.length - 1) {
                const beforeNode = this.traverseToIndex(index - 1);
                beforeNode.next = null;
                this.tail.prev = null;
                this.tail = beforeNode;
                this.length--;
            } else {
                const beforeNode = this.traverseToIndex(index - 1);
                const afterNode = this.traverseToIndex(index + 1);
                const delNode = this.traverseToIndex(index);
                delNode.next = null;
                delNode.prev = null;
                beforeNode.next = afterNode;
                afterNode.prev = beforeNode;
                this.length--;
            }
        } else {
            console.log("Invalid Index");
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
    makeCircular() {
        this.tail.next = this.head;
        this.head.prev = this.tail;
    }
    isCircularMyWay() {
        let tempArray = [];
        let currendNode = this.head;
        while (currendNode != null) {
            if (tempArray.length > this.length) {
                return true;
            } else {
                tempArray.push(currendNode.value);
                currendNode = currendNode.next;
            }
        }
        return false;
    }
    reverse() {
        if (this.isCircularMyWay()) {
            console.log("The linked list is circular");
        } else {
            const newLinkedList = new LinkedList(this.head.value);
            let currendNode = this.head;
            for (let x = 0; x < this.length; x++) {
                newLinkedList.prepend(currendNode.value);
                currendNode = currendNode.next;
                newLinkedList.deleteAtIndex(x + 1);
            }
            return newLinkedList;
        }
    }
    linearSearch(value) {
        let currendNode = this.head;
        for (let x = 0; x < this.length; x++) {
            if (currendNode.value === value) {
                return true;
            } else {
                currendNode = currendNode.next;
            }
        }
        return false;
    }
    updateValue(index, value) {
        const currNode = this.traverseToIndex(index);
        currNode.value = value;
    }
}

const llist1 = new LinkedList(1);
llist1.append(3);
llist1.append(2);
llist1.append(3);
llist1.append(3);
llist1.append(1);
llist1.deleteAllNodeWithValue(3)
console.log(llist1.show())
console.log(llist1.reverse());

if (llist1.reverse() === llist1) {
    console.log(true);
} else {
    console.log(false);
}

