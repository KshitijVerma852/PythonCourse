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
        this.head = newNode;
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
    insertToIndex(index, value) {
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
    deleteAllNodeWithValue(value) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode != null) {
            if (currentNode.value == value) {
                this.deleteAtIndex(counter);
                continue;
            }
            currentNode = currentNode.next;
            counter++;
        }
        this.length -= counter;
    }
}

llist1 = new LinkedList(1);
llist1.append(2);
llist1.append(3);
llist1.append(4);
llist1.prepend(10);
llist1.insertToIndex(2, 100);
llist1.deleteAtIndex(2);
llist1.append(1);
llist1.append(1);
llist1.append(1);
llist1.deleteAllNodeWithValue(1);
const ans = llist1.show();
console.log(ans);
