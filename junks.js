class TreeNode {
    constructor(left, value, right, parent, parentNodeValue) {
        this.left = left;
        this.value = value;
        this.right = right;
        this.parent = parent;
        this.parentNodeValue = parentNodeValue;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(null, value, null, null, null);
        } else {
            let currNode = this.root;
            while (true) {
                if (currNode.value > value) {
                    if (!currNode.left) {
                        currNode.left = new TreeNode(
                            null,
                            value,
                            null,
                            currNode,
                            currNode.value
                        );
                        return;
                    } else {
                        currNode = currNode.left;
                    }
                } else if (currNode.value < value) {
                    if (!currNode.right) {
                        currNode.right = new TreeNode(
                            null,
                            value,
                            null,
                            currNode,
                            currNode.value
                        );
                        return;
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
            if (currNode.value > value) {
                if (!currNode.left) {
                    return false;
                } else {
                    currNode = currNode.left;
                }
            } else if (currNode.value < value) {
                if (!currNode.right) {
                    return false;
                } else {
                    currNode = currNode.right;
                }
            } else {
                return true;
            }
        }
    }
    delete(value) {
        let currNode = this.root;
        while (true) {
            if (currNode.value > value) {
                if (!currNode.left) {
                    return false;
                } else {
                    currNode = currNode.left;
                }
            } else if (currNode.value < value) {
                if (!currNode.right) {
                    return false;
                } else {
                    currNode = currNode.right;
                }
            } else {
                const delNode = currNode;
                let leafNodeCase = false;
                if (!currNode.left && !currNode.right) {
                    leafNodeCase = true;
                } else if (!currNode.left) {
                    currNode = currNode.right;
                } else if (!currNode.right) {
                    currNode = currNode.left;
                } else {
                    currNode = currNode.right;
                }
                if (leafNodeCase) {
                    if (currNode.parent.left === currNode) {
                        currNode.parent.left = null;
                        currNode.parent = null;
                        break;
                    } else {
                        currNode.parent.right = null;
                        currNode.parent = null;
                        break;
                    }
                } else {
                    console.log(currNode.value);
                    if (!currNode.right) {
                        while (true) {
                            if (!currNode.left) {
                                break;
                            } else if (!currNode.right && !currNode.left) {
                                break;
                            } else {
                                currNode = currNode.left;
                            }
                        }
                        delNode.value = currNode.value;
                        if (!delNode.right) {
                            delNode.left.parentNodeValue = delNode.value;
                        } else if (!delNode.left) {
                            delNode.right.parentNodeValue = delNode.value;
                        } else {
                            delNode.right.parentNodeValue = delNode.value;
                            delNode.left.parentNodeValue = delNode.value;
                            if (currNode.parent.right === currNode) {
                                currNode.parent.right = null;
                                currNode.parent = null;
                                break;
                            } else {
                                currNode.parent.left = null;
                                currNode.parent = null;
                                break;
                            }
                        }
                    } else {
                        console.log("Here");
                        while (true) {
                            if (!currNode.left) {
                                break;
                            } else if (!currNode.right && !currNode.left) {
                                break;
                            } else {
                                currNode = currNode.left;
                            }
                        }
                        delNode.value = currNode.value;
                        if (!delNode.right) {
                            delNode.left.parentNodeValue = delNode.value;
                        } else if (!delNode.left) {
                            delNode.right.parentNodeValue = delNode.value;
                        } else {
                            delNode.right.parentNodeValue = delNode.value;
                            delNode.left.parentNodeValue = delNode.value;
                            if (currNode.parent.right === currNode) {
                                currNode.parent.right = null;
                                currNode.parent = null;
                                break;
                            } else {
                                currNode.parent.left = null;
                                currNode.parent = null;
                                break;
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
            parent: String(node.parent),
            parentNodeValue: node.parentNodeValue,
        };
        tree.left = node.left === null ? null : this.printTree(node.left);
        tree.right = node.right === null ? null : this.printTree(node.right);
        return tree;
    }
}

const tr1 = new Tree();
tr1.insert(9);
tr1.insert(7);
tr1.insert(2);
tr1.insert(8);
tr1.insert(87);
tr1.insert(42);
tr1.insert(93);
tr1.insert(92);
tr1.insert(39);
tr1.insert(50);
tr1.insert(58);
tr1.insert(47);
// tr1.delete(93);
console.log(JSON.stringify(tr1.printTree(tr1.root)));
