class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class Queue {
    constructor(value) {
        this.start = new Node(value, null, null);
        this.end = this.start;
        this.length = 1;
    }
    enqueue(value) {
        const newNode = new Node(value, this.end, null);
        this.end.prev = newNode;
        this.end = newNode;
        this.length++;
    }
    dequeue() {
        const tempNode = this.end.next;
        tempNode.prev = null;
        this.end.nect = null;
        this.end = tempNode;
        this.length--;
    }
    show() {
        let currNode = this.start;
        let ans = [];
        while (currNode != null) {
            ans.push(currNode.value);
            currNode = currNode.prev;
        }
        console.log(ans);
    }
}
const queue1 = new Queue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.dequeue();
queue1.show();
