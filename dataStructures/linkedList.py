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

    def show(self):
        currentNode = self.head
        ans = []
        while currentNode != None:
            ans.append(currentNode.valueOfNode)
            currentNode = currentNode.nextNode
        print(ans)


llist1 = LinkedList(1)
llist1.append(2)
llist1.prepend(5)
llist1.append(3)
llist1.show()
print(llist1.length)
