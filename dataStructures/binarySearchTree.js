class Node {
    constructor(left, value, right) {
        this.left = left;
        this.value = value;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(null, value, null);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currNode = this.root;
            while (true) {
                if (currNode.value > value) {
                    // left
                    if (!currNode.left) {
                        currNode.left = newNode;
                        return this;
                    } else {
                        currNode = currNode.left;
                    }
                } else {
                    // right
                    if (!currNode.right) {
                        currNode.right = newNode;
                        return this;
                    } else {
                        currNode = currNode.right;
                    }
                }
            }
        }
    }
    lookup(value) {
        let currNode = this.root;
        while (true) {
            while (currNode.left || currNode.right) {
                if (currNode.value > value) {
                    // Left
                    currNode = currNode.right;
                } else if (currNode.value < value) {
                    // Right
                    currNode = currNode.left;
                } else {
                    console.log("Found");
                    return this;
                }
            } 
        }
    }
}

const tr1 = new BinarySearchTree();
tr1.insert(9);
tr1.insert(4);
tr1.insert(6);
tr1.insert(20);
tr1.insert(170);
tr1.insert(15);
tr1.insert(1);
tr1.lookup(15)

console.log(JSON.stringify(traverse(tr1.root)));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
