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
        if self.head == None:
            self.head = Node(None, value, None)
            self.tail = self.head
            self.length += 1
        else:
            newNode = Node(self.tail, value, None)
            self.tail.nexT = newNode
            self.tail = newNode
            self.length += 1

    def traverseToIndex(self, index):
        currNode = self.head
        for x in range(0, index):
            currNdoe = currNode.nexT

        return currNode

    def pairsWithSum(self, num):
        currNode = self.head
        myDict = {}
        for x in range(0, self.length):
            myDict[currNode.value] = currNode.value
            currNode = currNode.nexT

        currNode = self.head

        bigArray = []

        for x in myDict:
            val = myDict[x]
            valReq = num - val

            if valReq in myDict.keys() \
                    and val not in bigArray \
                and valReq not in bigArray:
                bigArray.append(val)

        for x in bigArray:
            print(f"{x}, {num - x}")

    def delSumNodes(self, num):
        currNode = self.head
        indexes = []
        for x in range(0, self.length):
            try:
                if currNode.value + currNode.nexT.value == num:
                    indexes.append([x, x + 1])
            except AttributeError:
                pass
            currNode = currNode.nexT

        for x in range(0, len(indexes)):
            array = indexes[x]
            for y in array:
                currNode = self.head
                for z in range(0, y):
                    if z == 0:
                        currNode = self.head.nexT
                        self.head.nexT = None
                        currNode.prev = None
                        self.head = currNode
                        self.length -= 1
                    elif z == self.length - 1:
                        currNode = self.tail.prev
                        currNode.nexT = None
                        self.tail.prev = None
                        self.length -= 1
                    else:
                        prevNode = self.traverseToIndex(z - 1)
                        delNode = self.traverseToIndex(z)
                        nextNode = self.traverseToIndex(z + 1)
                        prevNode.nexT = nextNode
                        nextNode.prev = prevNode
                        delNode.nexT = None
                        delNode.prev = None
                        self.length -= 1

        print(indexes)

    def printList(self):
        currNode = self.head
        ans = []
        for x in range(0, self.length):
            ans.append(currNode.value)
            currNode = currNode.nexT

        print(ans)


llist1 = LinkedList()
llist1.append(-2)
llist1.append(5)
llist1.append(1)
llist1.append(6)
llist1.append(39)
llist1.delSumNodes(6)
llist1.printList()
