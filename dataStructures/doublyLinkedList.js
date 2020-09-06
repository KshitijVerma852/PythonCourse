class Node {
    constructor(prev = null, data, next = null) {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            prev: null,
            data: value,
            next: null,
        };
        this.length = 1;
        this.tail = this.head;
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
    append(localData) {
        const newNode = new Node(null, localData, null);
        this.tail.next = newNode;
        newNode.prev = this.tail;

        this.tail = newNode;
        this.length++;
    }
    show() {
        let ans = [];
        let currentNode = this.head;
        while (currentNode != null) {
            ans.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return ans;
    }
    insert(data, index) {
        if (index >= this.length) {
            
        }
    }
}

const llist1 = new LinkedList(1);
llist1.append(2);
llist1.append(3);
llist1.append(4);
const llist1Show = llist1.show();
console.log(llist1Show);
