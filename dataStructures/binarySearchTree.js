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
            let currNode = this.root;
            while (true) {
                if (currNode.value < value) {
                    if (!currNode.right) {
                        currNode.right = new Node(
                            currNode,
                            currNode.value,
                            null,
                            value,
                            null
                        );
                        return;
                    } else {
                        currNode = currNode.right;
                    }
                } else if (currNode.value > value) {
                    if (!currNode.left) {
                        currNode.left = new Node(
                            currNode,
                            currNode.value,
                            null,
                            value,
                            null
                        );
                        return;
                    } else {
                        currNode = currNode.left;
                    }
                }
            }
        }
    }
    delete(value) {
        if (!this.root) {
            console.log("Tree is empty.");
        } else {
            if (value === this.root.value) {
                const rightNode = this.root.right;
                const leftNode = this.root.left;
                this.root.right = null;
                this.root.left = null;
                rightNode.parentNode = leftNode;
                rightNode.parentNodeValue = leftNode.value;
                this.root = leftNode;
            } else {
                let currNode = this.root;
                while (true) {
                    if (currNode.value === value) {
                        const foundNode = currNode;
                        let right = false;
                        let left = false;
                        if (currNode.parentNode.right === currNode) {
                            right = true;
                        } else {
                            left = true;
                        }
                        if (currNode.right === null && currNode.left === null) {
                            if (right) {
                                currNode.parentNode.right = null;
                                currNode.parentNode = null;
                                break;
                            } else if (left) {
                                currNode.parentNode.left = null;
                                currNode.parentNode = null;
                                break;
                            }
                        } else {
                            if (right) {
                                if (currNode.right.right !== null) {
                                    currNode = currNode.right;
                                }
                                while (currNode.right !== null) {
                                    currNode = currNode.left;
                                }
                                foundNode.value = currNode.value;
                                currNode.parentNode.left = null;
                                currNode.parentNode = null;
                                foundNode.right.parentNodeValue =
                                    currNode.value;
                                foundNode.left.parentNodeValue = currNode.value;
                                break;
                            } else if (left) {
                                if (currNode.left.left !== null) {
                                    currNode = currNode.left;
                                }
                                while (!currNode.left) {
                                    currNode = currNode.left;
                                    currNode = currNode.right;
                                }
                                foundNode.value = currNode.value;
                                currNode.parentNode.right = null;
                                currNode.parentNode = null;
                                currNode.right.parentNodeValue = currNode.value;
                                currNode.left.parentNodeValue = currNode.value;
                                break;
                            }
                        }
                    } else {
                        if (currNode.value < value) {
                            if (!currNode.right) {
                                console.log("Not found.");
                                break;
                            } else {
                                currNode = currNode.right;
                            }
                        } else if (currNode.value > value) {
                            if (!currNode.left) {
                                console.log("Not found.");
                                break;
                            } else {
                                currNode = currNode.left;
                            }
                        }
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

const tr1 = new BinarySearchTree();
tr1.insert(9);
tr1.insert(2);
tr1.insert(87);
tr1.insert(42);
tr1.insert(93);
tr1.insert(92);
tr1.insert(100);
tr1.delete(93);
console.log("JSON data:\n");
console.log(JSON.stringify(tr1.printTree(tr1.root)));
