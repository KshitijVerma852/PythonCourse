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

    def isCircular(self):
        array = []
        currNode = self.head
        while currNode != None:
            if len(array) > self.length:
                return True
            else:
                currNode = currNode.nexT
        else:
            return False

    def makeCircular(self):
        self.head.prev = self.tail
        self.tail.nexT = self.head

    def circularize(self):
        self.head.prev = None
        self.tail.nexT = None

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

    def legalIndex(self, index):
        if index >= self.length or index < 0:
            return False
        else:
            return True

    def traverseToIndex(self, index):
        currNode = self.head
        for x in range(0, index):
            currNode = currNode.nexT

        return currNode

    def insertAtIndex(self, index, value):
        if self.length == 0:
            print("List is empty")
        else:
            if self.legalIndex(index):
                if index == 0:
                    self.prepend(value)
                elif index == self.length - 1:
                    self.append(value)
                else:
                    prevNode = self.traverseToIndex(index - 1)
                    nextNode = self.traverseToIndex(index)
                    newNode = Node(prevNode, value, nextNode)
                    prevNode.nexT = newNode
                    nextNode.prev = newNode
                    self.length += 1
            else:
                print("Invalid index")

    def deleteAtIndex(self, index):
        if self.length == 0:
            print("Linked List is empty")
        else:
            if self.legalIndex(index):
                if index == 0:
                    newNode = self.head.nexT
                    self.head.nexT = None
                    newNode.prev = None
                    self.head = newNode
                    self.length -= 1
                elif index == self.length - 2:
                    newNode = self.tail.prev
                    self.tail.prev = None
                    newNode.nexT = None
                    self.tail = newNode
                else:
                    prevNode = self.traverseToIndex(index - 1)
                    nextNode = self.traverseToIndex(index + 1)
                    currNode = self.traverseToIndex(index)
                    currNode.nexT = None
                    currNode.prev = None
                    prevNode.nexT = nextNode
                    nextNode.prev = prevNode
                    self.length -= 1
            else:
                print("Invalid index")

    def deleteAllNodesWithValue(self, value):
        if self.length == 0:
            print("LinkedList is empty")
        else:
            currNode = self.head
            while currNode != None:
                if currNode.value == value:
                    if currNode == self.head:
                        newNode = self.head.nexT
                        self.head.nexT = None
                        newNode.prev = None
                        self.head = newNode
                        self.length -= 1
                    elif currNode == self.tail:
                        newNode = self.tail.prev
                        self.tail.prev = None
                        newNode.nexT = None
                        self.tail = newNode
                        self.length -= 1
                    else:
                        prevNode = currNode.prev
                        nextNode = currNode.nexT
                        currNode.nexT = None
                        currNode.prev = None
                        prevNode.nexT = nextNode
                        nextNode.prev = prevNode
                        currNode = prevNode
                        self.length -= 1
                else:
                    currNode = currNode.nexT
    
    def reverse(self):
        currNode = self.head
        for x in range(0, self.length):
            self.prepend(currNode.value)
            self.deleteAtIndex(x + 1)
        
    def show(self):
        currNode = self.head
        ans = {}
        for x in range(0, self.length):
            ans[x] = currNode.value
            currNode = currNode.nexT

        return ans


llist1 = LinkedList()
llist1.append(62)
llist1.append(53)
llist1.append(53)
llist1.append(53)
llist1.append(53)
llist1.append(53)
llist1.append(53)
llist1.append(98)
llist1.prepend(43)
llist1.insertAtIndex(2, 89)
llist1.deleteAtIndex(2)
llist1.deleteAllNodesWithValue(53)
llist1.reverse()
print(llist1.show())
