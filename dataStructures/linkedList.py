class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self, value):
        self.head = {
            value: value,
            next: None
        }
        self.length = 1
        self.tail = self.head

    def append(self, value):
        newNode = Node(value, None)
        self.head[next] = newNode
        self.head = newNode

    def show(self):
        currNode = Node(None)
        while currNode.next != None:
            print(currNode.value)
            currNode = currNode.next


llist1 = LinkedList(10)
llist1.append(2)
llist1.append(3)
llist1.append(4)
llist1.show()
