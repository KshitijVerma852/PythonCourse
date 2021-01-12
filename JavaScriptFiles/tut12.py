import json

class Node:
    def __init__(self, prev, value, nexT):
        self.prev = prev
        self.value = value
        self.nexT = nexT


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.circular = False
        self.length = 0

    def _makeCircular(self):
        self.head.prev = self.tail
        self.tail.nexT = self.head
        self.circular = True

    def _decircularize(self):
        self.head.prev = None
        self.tail.nexT = None
        self.circular = False

    def _isCircular(self):
        if self.head.prev == None \
                and self.tail.nexT == None:
            return False
        else:
            return True

    def _validate(self, index=False, circular=False):
        if index != False:
            if index < 0 or index > self.length:
                return False

        if circular == True:
            return not self._isCircular()

        return True

    def append(self, value):
        if self.head is None:
            self.head = Node(None, value, None)
            self.tail = self.head
            self.length += 1
        else:
            if self._validate(circular=True):
                newNode = Node(None, value, None)
                self.tail.nexT = newNode
                self.tail = newNode
                self.length += 1
                if self._isCircular:
                    self._makeCircular()
            else:
                self._decircularize()
                self.circular = True
                self.append(value)

    def prepend(self, value):
        if self.head is None:
            self.head = Node(None, value, None)
            self.tail = self.head
            self.length += 1
        else:
            if self._validate(circular=True):
                newNode = Node(None, value, self.head)
                self.head.prev = newNode
                self.head = newNode
                self.length += 1
                if self.circular:
                    self._makeCircular()
            else:
                self._decircularize()
                self.circular = True
                self.prepend(value)

    def _traverse(self, index):
        currNode = self.head
        for x in range(0, index):
            currNode = currNode.nexT

        return currNode

    def insert(self, index, value):
        if self._validate(index=index):
            if index == 0:
                self.prepend(value)
            elif index == self.length - 1:
                self.append(value)
            else:
                if not self._isCircular():
                    prevNode = self._traverse(index - 1)
                    nextNode = self._traverse(index)
                    newNode = Node(prevNode, value, nextNode)
                    prevNode.nexT = newNode
                    nextNode.prev = newNode
                    self.length += 1
                    if self.circular:
                        self._makeCircular()
                else:
                    self._decircularize()
                    self.circular = True
                    self.insert(index, value)
    
    def delete(self, index):
        if self._validate(index=index):
            if index == 0:
                currNode = self.head.nexT
                currNode.prev = None
                self.head.nexT = None
                self.head = currNode
                if self.circular:
                    self.head.prev = self.tail
            elif index == self.length - 1:
                currNode = self.tail.prev
                currNode.nexT = None
                self.tal.prev = None
                self.tail = currNode
                if self.circular:
                    self.tail.nexT = self.head
            else:
                prevNode = self._traverse(index - 1)
                nextNode = self._traverse(index + 1)
                currNode = self._traverse(index)
                currNode.nexT = None
                currNode.prev = None
                prevNode.nexT = nextNode
                nextNode.prev = prevNode
                self.length -= 1
    
    def deleteAllNodesWithValue(self, value):
        currNode = self.head
        if self._isCircular():
            self._decircularize()
            self.circular = True
        while currNode != None:
            if currNode.value == value:
                if currNode == self.head:
                    newHeadNode = self.head.nexT
                    newHeadNode.prev = None
                    self.head.nexT = None
                    self.head = newHeadNode
                    self.length -= 1
                elif currNode == self.tail:
                    newTailNode = self.tail.prev
                    newTailNode.nexT = None
                    self.tail.prev = None
                    self.tail = newTailNode
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

            currNode = currNode.nexT
        
        if self.circular:
            self._makeCircular()
                
    def printList(self):
        currNode = self.head
        ans = {}
        for x in range(0, self.length):
            ans[x] = currNode.value
            currNode = currNode.nexT

        print(json.dumps(ans, indent=4))


llist1 = LinkedList()
llist1.append(56)
llist1.append(34)
llist1.append(16)
llist1.append(16)
llist1.prepend(10)
llist1._makeCircular()
llist1.insert(2, 12)
llist1.delete(2)
llist1.deleteAllNodesWithValue(16)
llist1.printList()
