class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    show() {
        let ans = [];
        let currentNode = this.head;
        while (currentNode != null) {
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
        const prevNode = this.traverseToIndex(index - 1);
        const afterNode = this.traverseToIndex(index + 1);
        const newNode = new Node(value);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
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
            if (index == 0) {
                const afterNode = this.traverseToIndex(index + 1);
                this.head.next = null;
                afterNode.prev = null;
                this.head = afterNode;
                this.length--;
            } else if (index == this.length - 1) {
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
    deleteAllWithValue(value) {
        let currendNode = this.head;
        while (currendNode != null) {
            // console.log("Here");
            // console.log(this.length);
            if (
                currendNode.value === value &&
                currendNode != this.head &&
                currendNode != this.tail
            ) {
                console.log("Here");
                const prevNode = currendNode.prev;
                const nextNode = currendNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }
            currendNode = currendNode.next;
        }
        let currendNode2 = this.head;
        if (currendNode.prev === null) {
            // let nextNode = this.traverseToIndex(1);
            console.log("Here");
            this.head = this.traverseToIndex(1);
            this.deleteAtIndex(0);
        } else if (currendNode.next === null) {
            let prevNode = this.traverseToIndex(this.length - 2);
            this.tail = prevNode;
            this.deleteAtIndex(this.length - 1);
        }
    }
}

llist1 = new LinkedList(1);
llist1.append(2);
llist1.append(3);
llist1.append(4);
llist1.append(4);
llist1.append(4);
llist1.append(4);
llist1.append(1);
llist1.append(5);
llist1.append(5);
llist1.append(5);
llist1.append(7);
llist1.append(4);
llist1.append(4);
llist1.append(5);
llist1.deleteAllWithValue(5);
console.log(llist1.show());
