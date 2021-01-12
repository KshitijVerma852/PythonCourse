class Node {
    constructor(parentNode, parentNodeValue, left, value, right) {
        this.parentNode = parentNode;
        this.parentNodeValue = parentNodeValue;
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
        if (!this.root) {
            this.root = new Node(null, null, null, value, null);
        } else {
            let currNode = this.root
            while (true) {
                if (currNode.value < value) {
                    if (!currNode.right) {
                        currNode.right = new Node(currNode, currNode.value, null, value, null);
                        return;
                    } else {
                        currNode = currNode.right;
                    }
                } else if (currNode.value > value) {
                    if (!currNode.left) {
                        currNode.left = new Node(currNode, currNode.value, null, value, null);
                        return;
                    } else {
                        currNode = currNode.left;
                    }
                }
            }
        }
    }
    delete(value) {
        let currNode = this.root;
        while (true)  {
            if (currNode.value === value) {
                let foundNode = currNode;
                if (currNode.right !== null) {
                    currNode = currNode.right;
                    while (currNode.right !== null) {
                        currNode = currNode.left;
                    }
                }
                foundNode.value = currNode.value;
                if (foundNode.left === null) {
                    foundNode.left.parentNode = foundNode;
                    foundNode.left.parentNodeValue = foundNode.value;
                }
                foundNode.right.parentNode = foundNode
                foundNode.right.parentNodeValue = foundNode.value;
                currNode.parentNode.left = null;
                currNode.parentNode = null;
                return;
            } else {
                if (currNode.value < value) {
                    // Go right
                    if (!currNode.right) {
                        console.log("Not found");
                        return;
                    } else {
                        currNode = currNode.right;
                    }
                } else if (currNode.value > value) {
                    // Go left
                    if (!currNode.left) {
                        console.log("Not found");
                        return;
                    } else {
                        currNode = currNode.left;
                    }
                }
            }
        }
    }
    printTree(node) {
        const tree = {
            value: node.value,
            parentNode: String(node.parentNode),
            parentNodeValue: String(node.parentNodeValue),
        };
        tree.left = node.left === null ? null : this.printTree(node.left);
        tree.right = node.right === null ? null : this.printTree(node.right);
        return tree;
    }
}

const bst1 = new BinarySearchTree();
bst1.insert(9);
bst1.insert(2);
bst1.insert(87);
bst1.insert(42);
bst1.insert(93);
bst1.insert(92);
bst1.insert(100);
bst1.insert(1);
bst1.insert(5);
bst1.delete(2);
console.log(JSON.stringify(bst1.printTree(bst1.root)));
