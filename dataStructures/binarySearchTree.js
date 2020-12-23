function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

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
        this.length = 0;
    }
    append(value) {
        if (this.root == null) {
            this.root = new Node(null, value, null);
            this.length++;
        } else {
            let currNode = this.root;
            while (true) {
                if (currNode.value > value) {
                    // Go left
                    if (!currNode.left) {
                        currNode.left = new Node(null, value, null);
                        this.length++;
                        return this;
                    } else {
                        currNode = currNode.left;
                    }
                } else {
                    // Go right
                    if (!currNode.right) {
                        currNode.right = new Node(null, value, null);
                        this.length++;
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
            if (currNode.value == value) {
                console.log("Found");
                return this;
            } else {
                if (currNode.value > value) {
                    // Go left
                    if (!currNode.left) {
                        console.log("Not found");
                        return;
                    } else {
                        currNode = currNode.left;
                    }
                } else {
                    // Go right
                    if (!currNode.right) {
                        console.log("Not found");
                        return;
                    } else {
                        currNode = currNode.right;
                    }
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.append(8);
tree.append(29);
tree.append(12);
tree.append(3);
tree.append(6);
tree.append(55);
tree.lookup(98);
console.log(JSON.stringify(traverse(tree.root)));
