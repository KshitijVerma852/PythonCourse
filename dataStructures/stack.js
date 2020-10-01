class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class Stack {
    constructor(value) {
        this.bottom = new Node(value, null, null);
        this.top = this.bottom;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value, null, this.top);
        this.top.next = newNode;
        this.top = newNode;
        this.length++;
    }
    pop() {
        if (this.length > 1) {
            const prevNode = this.top.prev;
            prevNode.next = null;
            this.top.prev = null;
            this.top = prevNode;
            this.length--;
        }
    }
    peek() {
        console.log(`Peek: ${this.top.value}`);
    }
    show() {    
        let currNode = this.bottom;
        while (currNode != null) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
}

const st1 = new Stack(1);
st1.push(2);
st1.push(3);
st1.pop();
st1.peek();
st1.show();
