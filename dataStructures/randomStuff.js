class Node {
    constructor(parentNode, parentNodeValue, right, value, left) {
        this.parentNode = parentNode;
        this.parentNodeValue = parentNodeValue;
        this.right = right;
        this.value = value;
        this.left = left;
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
    JSON_Tree(node) {
        const tree = {
            value: node.value,
            parentNode: String(node.parentNode),
            parentNodeValue: String(node.parentNodeValue),
        };
        tree.left = node.left === null ? null : this.JSON_Tree(node.left);
        tree.right = node.right === null ? null : this.JSON_Tree(node.right);
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
console.log(JSON.stringify(tr1.JSON_Tree(tr1.root)));
