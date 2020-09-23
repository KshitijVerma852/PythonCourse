class Node:
    def __init__(self, valueOfNode, nextNode, prevNode):
        self.valueOfNode = valueOfNode
        self.nextNode = nextNode
        self.prevNode = prevNode


class LinkedList:
    def __init__(self, valueOfNode):
        self.head = Node(valueOfNode, None, None)
        self.tail = self.head
        self.length = 1

    def append(self, valueOfNode):
        newNode = Node(valueOfNode, None, self.tail)
        self.tail.nextNode = newNode
        newNode.prevNode = self.tail
        self.tail = newNode
        self.length += 1

    def prepend(self, valueOfNode):
        newNode = Node(valueOfNode, self.head, None)
        self.head.prevNode = newNode
        self.head = newNode
        self.length += 1

    def legalIndex(self, index):
        if index < 0 or index >= self.length:
            return False
        else:
            return True

    def traverseToIndex(self, index):
        if self.legalIndex(index):
            if index == 0:
                return self.head
            elif index == self.length - 1:
                return self.tail
            else:
                currentNode = self.head
                for x in range(0, index):
                    currentNode = currentNode.nextNode
                return currentNode
        else:
            print("Invalid index")

    def insertAtIndex(self, index, valueOfNode):
        if index == 0:
            self.prepend(valueOfNode)
        elif index == self.length - 1:
            self.append(valueOfNode)
        else:
            prevNode = self.traverseToIndex(index - 1)
            nextNode = self.traverseToIndex(index + 1)
            newNode = Node(valueOfNode, nextNode, prevNode)
            prevNode.nextNode = newNode
            newNode.prevNode = newNode

    def deleteAtIndex(self, index):
        if self.legalIndex(index):
            if index == 0:
                currNode = self.head
                self.head = self.traverseToIndex(1)
                currNode.nextNode = None
                self.length -= 1
            elif index == self.length - 1:
                prevNode = self.traverseToIndex(self.length - 2)
                prevNode.nextNode = None
                currNode = self.traverseToIndex(self.length - 1)
                currNode.prevNode = None
                self.length -= 1
            else:
                prevNode = self.traverseToIndex(index - 1)
                nextNode = self.traverseToIndex(index + 1)
                currNode = self.traverseToIndex(index)
                currNode.nextNode = None
                currNode.prevNode = None
                prevNode.nextNode = nextNode
                nextNode.prevNode = prevNode
                self.length -= 1

    def deleteAllNodeWithValue(self, value):
        currNode = self.head
        while currNode != None:
            if currNode.valueOfNode == value:
                if currNode == self.head:
                    self.deleteAtIndex(0)
                elif currNode == self.tail:
                    self.deleteAtIndex(self.length - 1)
                else:
                    prevNode = currNode.prevNode
                    nextNode = currNode.nextNode
                    prevNode.nextNode = nextNode
                    nextNode.prevNode = prevNode
                    currNode = prevNode
                    self.length -= 1
            currNode = currNode.nextNode

    def reverse(self):
        currNode = self.head
        for x in range(0, self.length):
            self.prepend(currNode.valueOfNode)
            currNode = currNode.nextNode
            self.deleteAtIndex(x + 1)

    def makeCircular(self):
        self.tail.nextNode = self.head
        self.head.prevNode = self.tail

    def isCircular(self):
        ans = []
        currNode = self.head
        while currNode != None:
            if len(ans) > self.length:
                return True
            else:
                ans.append(currNode.valueOfNode)
                currNode = currNode.nextNode
        else:
            return False

    def linearSearch(self, value):
        tempList = []
        currNode = self.head
        while currNode != None:
            if len(tempList) > self.length:
                break
            else:
                if currNode.valueOfNode == value:
                    return True
                else:
                    tempList.append(currNode.valueOfNode)
                    currNode = currNode.nextNode

    def show(self):
        currentNode = self.head
        ans = []
        while currentNode != None:
            ans.append(currentNode.valueOfNode)
            currentNode = currentNode.nextNode
        print(ans)


llist1 = LinkedList(1)
llist1.append(93)
llist1.append(35)
llist1.append(456)
llist1.append(56)
llist1.append(9)
llist1.show()
llist1.makeCircular()
print(llist1.isCircular())
