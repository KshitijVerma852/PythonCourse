import json


class Node:
    def __init__(self, prev, value, nexT):
        self.prev = prev
        self.value = value
        self.nexT = nexT


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = self.head
        self.length = 0

    def append(self, value):
        if self.length == 0:
            self.head = Node(None, value, None)
            self.tail = self.head
            self.length += 1
        else:
            newNode = Node(self.tail, value, None)
            self.tail.nexT = newNode
            self.tail = newNode
            self.length += 1

    def prepend(self, value):
        if self.length == 0:
            self.head = Node(None, value, None)
            self.tail = self.head
            self.length += 1
        else:
            newNode = Node(None, value, self.head)
            self.head.prev = newNode
            self.head = newNode
            self.length += 1

    def traverseToIndex(self, index):
        currNode = self.head
        for node in range(0, index):
            currNode = currNode.nexT
        return currNode

    def insertAtIndex(self, index, value):
        if index < 0 or index >= self.length:
            return False
        else:
            if index == 0:
                self.prepend(value)
            elif index == (self.length - 1):
                self.append(value)
            else:
                prevNode = self.traverseToIndex(index - 1)
                nextNode = self.traverseToIndex(index)
                newNode = Node(prevNode, value, nextNode)
                prevNode.nexT = newNode
                nextNode.prev = newNode
                self.length += 1

    def deleteAtIndex(self, index):
        if index == 0:
            currNode = self.head.nexT
            self.head.nexT = None
            currNode.prev = None
            self.head = currNode
            self.length -= 1
        elif index == self.length - 1:
            currNode = self.tail.prev
            currNode.nexT = None
            self.tail.prev = None
            self.length -= 1
        else:
            prevNode = self.traverseToIndex(index - 1)
            delNode = self.traverseToIndex(index)
            nextNode = self.traverseToIndex(index + 1)
            prevNode.nexT = nextNode
            nextNode.prev = prevNode
            delNode.nexT = None
            delNode.prev = None
            self.length -= 1

    def deleteAllNodeWithValue(self, value):
        currNode = self.head
        while currNode != None:
            if currNode.value == value:
                if currNode == self.head:
                    self.deleteAtIndex(0)
                elif currNode == self.tail:
                    print(self.length)
                    self.deleteAtIndex(self.length - 1)

            currNode = currNode.nexT

    def printList(self):
        currNode = self.head
        ans = {}
        for nodeIndex in range(0, self.length):
            ans[nodeIndex] = currNode.value
            currNode = currNode.nexT

        return ans


llist1 = LinkedList()
llist1.append(35)
llist1.append(5)
llist1.append(75)
llist1.append(17)
llist1.prepend(91)
llist1.insertAtIndex(1, 89)
llist1.deleteAtIndex(3)
llist1.append(100)
llist1.prepend(100)
llist1.deleteAllNodeWithValue(100)
print(json.dumps(llist1.printList(), indent=4))
print(llist1.length)
