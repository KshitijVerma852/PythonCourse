class Node {
    constructor(prev, value, next) {
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
        if (this.head === null) {
            this.head = new Node(null, value, null);
            this.tail = this.head;
            this.length++;
        } else {
            const newNode = new Node(this.tail, value, null);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(null, value, null);
            this.tail = this.head;
            this.length++;
        } else {
            const newNode = new Node(null, value, this.head);
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
    }

    traverseToIndex(index) {
        let currNode = this.head;
        for (let x = 0; x < index; x++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    legalIndex(index) {
        if (index > this.length || index < 0) {
            return false;
        } else {
            return true;
        }
    }

    insertAtIndex(index, value) {
        if (this.legalIndex(index)) {
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
        } else {
            console.log("Not a valid index.");
        }
    }

    deleteAtIndex(index) {
        if (this.legalIndex(index)) {
            if (this.length > 0) {
                if (index === 0) {
                    this.head = this.head.next;
                    this.head.prev = null;
                    this.length--;
                } else if (index === this.length - 1) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    this.length--;
                } else {
                    const delNode = this.traverseToIndex(index);
                    const prevNode = this.traverseToIndex(index - 1);
                    const nextNode = this.traverseToIndex(index + 1);
                    prevNode.next = nextNode;
                    nextNode.prev = nextNode;
                    delNode.next = null;
                    delNode.prev = null;
                    this.length--;
                }
            } else {
                console.log("Linked List is currently empty.");
            }
        } else {
            console.log("Not a legal index.");
        }
    }

    deleteAllNodesWithValue(value) {
        if (this.length > 0) {
            let currNode = this.head;
            while (currNode !== null) {
                if (currNode.value === value) {
                    if (currNode === this.head) {
                        this.head = this.head.next;
                        this.head.prev = null;
                        this.length--;
                    } else if (currNode === this.tail) {
                        this.tail = this.tail.prev;
                        this.tail.next = null;
                        this.length--;
                    } else {
                        const prevNode = currNode.prev;
                        const nextNode = currNode.next;
                        prevNode.next = nextNode;
                        nextNode.prev = prevNode;
                        currNode = prevNode;
                        this.length--;
                    }
                }
                currNode = currNode.next;
            }
        } else {
            console.log("Linked List is currently empty.");
        }
    }

    makeCircular() {
        this.tail.next = this.head;
        this.head.prev = this.tail;
    }

    isCicular() {
        let tempArray = [];
        let currNode = this.head;
        while (currNode !== null) {
            if (tempArray.length > this.length) {
                return true;
            }
            tempArray.push(currNode.value);
            currNode = currNode.next;
        }
        return false;
    }

    updateValueAtIndex(index, value) {
        if (this.length > 0) {
            this.traverseToIndex(index).value = value;
        } else {
            console.log("Linked List is empty.");
        }
    }

    linearSearch(value) {
        let currNode = this.head;
        while (currNode != null) {
            if (currNode.value === value) {
                return true;
            } else {
                currNode = currNode.next;
            }
        }
        return false;
    }

    peek() {
        const prevNode = this.head.prev;
        const nextNode = this.head.next;
        const newNode = new Node(prevNode, value, nextNode);
        return newNode;
    }

    print() {
        let currNode = this.head;
        let ans = {};
        for (let x = 0; x < this.length; x++) {
            ans[x] = currNode.value;
            currNode = currNode.next;
        }
        return ans;
    }
    reverse() {
        const newArr = [];
        let currNode = this.head;
        while (currNode !== null) {
            newArr.push(currNode.value);
            currNode = currNode.next;
        }
        newArr.reverse();
        return newArr;
    }
    checkForPalindrome() {
        let leftNode = this.head;
        let rightNode = this.tail;
        let counter = 0;
        while (leftNode.value === rightNode.value) {
            if (counter > this.length / 2) {
                return true;
            } else {
                counter++;
                leftNode = leftNode.next;
                rightNode = rightNode.prev;
            }
        }
        return false;
    }
    deleteRecursive(node, value) {
        if (node === null) {
            return;
        } else if (node.value === value) {
            if (node.prev === null) {
                const newNode = node.next;
                newNode.prev = null;
                this.head.next = null;
                this.head = newNode;
                this.length--;
            } else if (node.next === null) {
                const newNode = node.prev;
                newNode.next = null;
                this.tail.prev = null;
                this.tail = newNode;
                this.length--;
            } else {
                const prevNode = node.prev;
                const nextNode = node.next;
                node.prev = null;
                node.next = null;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                node = prevNode;
                this.length--;
            }
        }
        return this.deleteRecursive(node.next, value);
    }
    showRecursive(node) {
        if (node === null) {
            return;
        } else {
            node.prev === null
                ? process.stdout.write(`null <-- ${node.value} <--> `)
            : node.next === null
                ? process.stdout.write(`${node.value} --> null`)
            : process.stdout.write(`${node.value} <--> `);
            return this.showRecursive(node.next);
        }
    }
    convertArrToLinkedList(arr) {
        
    }
}

const llist1 = new LinkedList();
llist1.append(7);
llist1.append(1);
llist1.append(6);
llist1.showRecursive(llist1.head);

const llist2 = new LinkedList();
llist2.append(5);
llist2.append(9);
llist2.append(2);

function sumOfTwoLinkedLists(llist1, llist2) {
    let llist1Total = 0;
    let currNode = llist1.tail;
    for (let x = llist1.length - 1; x > -1; x--) {
        llist1Total += currNode.value * 10 ** x;
        currNode = currNode.prev;
    }

    let llist2Total = 0;
    let currNode2 = llist2.tail;
    for (let x = llist1.length - 1; x > -1; x--) {
        llist2Total += currNode2.value * 10 ** x;
        currNode2 = currNode2.prev;
    }

    console.log(llist1Total + llist2Total);
}

// sumOfTwoLinkedLists(llist1, llist2);
