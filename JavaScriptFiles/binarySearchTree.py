import json


class Node:
    def __init__(self, parent, parentNodeValue, left, value, right):
        self.parent = parent
        self.parentNodeValue = parentNodeValue
        self.left = left
        self.value = value
        self.right = right


class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(None, None, None, value, None)
        else:
            currNode = self.root
            while True:
                if value > currNode.value:
                    if currNode.right is None:
                        currNode.right = Node(
                            currNode, currNode.value, None, value, None)
                        return
                    else:
                        currNode = currNode.right
                elif value < currNode.value:
                    if currNode.left is None:
                        currNode.left = Node(
                            currNode, currNode.value, None, value, None)
                        return
                    else:
                        currNode = currNode.left

    def delete(self, value):
        if self.root is None:
            print("Tree is currently empty")
        else:
            if self.root.value is value:
                rightNode = self.root.right
                leftNode = self.root.left
                self.root.right = None
                self.root.left = None
                leftNode.right = rightNode
                rightNode.parent = leftNode
                rightNode.parentNodeValue = leftNode.value
                self.root = leftNode
                self.root.parent = None
                self.root.parentNodeValue = None
            else:
                currNode = self.root
                while True:
                    if currNode.value is value:
                        foundNode = currNode
                        right = False
                        left = False
                        if currNode is currNode.parent.right:
                            right = True
                        else:
                            left = True
                        if currNode.right is None and currNode.left is None:
                            if right:
                                currNode.parent.right = None
                                currNode.parent = None
                                break
                            elif left:
                                currNode.parent.left = None
                                currNode.parent = None
                                break
                        else:
                            if right:
                                if currNode.right.right is None:
                                    pass
                                else:
                                    currNode = currNode.right
                            elif left:
                                if currNode.left.left is None:
                                    pass
                                else:
                                    currNode = currNode.left
                            if right:
                                while currNode.left is not None:
                                    currNode = currNode.left
                            elif left:
                                while currNode.right is not None:
                                    currNode = currNode.right

                            foundNode.value = currNode.value
                            foundNode.right.parentNodeValue = foundNode.value
                            foundNode.left.parentNodeValue = foundNode.value
                            if right:
                                currNode.parent.left = None
                                currNode.parent = None
                                break
                            elif left:
                                currNode.parent.right = None
                                currNode.parent = None
                                break
                    else:
                        if value < currNode.value:
                            if currNode.left is None:
                                print("Not found")
                            else:
                                currNode = currNode.left
                        elif value > currNode.value:
                            if currNode.right is None:
                                print("Not found")
                            else:
                                currNode = currNode.right

    def printTree(self, node):
        tree = {
            "value": node.value,
            "parentNodeValue": str(node.parentNodeValue),
            "parentNode": str(node.parent)
        }

        if node.left is None:
            tree["left"] = str(None)
        else:
            tree["left"] = self.printTree(node.left)

        if node.right is None:
            tree["right"] = str(None)
        else:
            tree["right"] = self.printTree(node.right)

        return tree


tr1 = BST()
tr1.insert(9)
tr1.insert(2)
tr1.insert(1)
tr1.insert(-1)
tr1.insert(87)
tr1.insert(42)
tr1.insert(93)
# tr1.insert(92)
# tr1.insert(100)
# tr1.delete(9)
print()
print("\nJSON data: \n")
print(json.dumps(tr1.printTree(tr1.root)))
