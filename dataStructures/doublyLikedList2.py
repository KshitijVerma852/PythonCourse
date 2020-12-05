class Node:
    def __init__(self, prev, value, nexT):
        self.prev = prev
        self.value = value
        self.nexT = nexT


class LinkedList:
    def __init__(self, value):
        self.head = Node(None, value, None)
        self.tail = self.head
        self.length = 1

    def append(self, value):
        newNode = Node(self.tail, value, None)
        self.tail.nexT = newNode
        self.tail = newNode
        self.length += 1

    def prepend(self, value):
        newNode = Node(None, value, self.head)
        self.head.prev = newNode
        self.head = newNode
        self.length += 1

    def insert(self, index, value):
        pass

    def show(self):
        currNode = self.head
        values = []
        while currNode != None:
            values.append(currNode.value)
            currNode = currNode.nexT

        keys = []
        for x in range(0, self.length):
            keys.append(x)

        return dict(zip(keys, values))


llist1 = LinkedList(45)
llist1.append(35)
llist1.append(8)
llist1.append(78)
llist1.prepend(95)
print(llist1.show())
