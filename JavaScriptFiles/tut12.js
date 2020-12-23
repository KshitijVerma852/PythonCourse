class Node {
    constructor(parent, left, value, right) {
        this.parent = parent;
        this.left = left;
        this.value = value;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(null, null, value, null);
        } else {
            let currNode = this.root;
            while (true) {
                if (currNode.value < value) {
                    // Go right
                    if (!currNode.right) {
                        currNode.right = new Node(currNode, null, value, null);
                        return;
                    } else {
                        currNode = currNode.right;
                    }
                } else if (currNode.value > value) {
                    // Go left
                    if (!currNode.left) {
                        currNode.left = new Node(currNode, null, value, null);
                        return;
                    } else {
                        currNode = currNode.left;
                    }
                }
            }
        }
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BST();
tree.insert(8);
tree.insert(29);
tree.insert(12);
tree.insert(3);
tree.insert(6);
tree.insert(55);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.root);
