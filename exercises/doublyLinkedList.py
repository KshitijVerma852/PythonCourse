class Node:
    def __init__(self, prev, value, next):
        self.prev = prev
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, value):
        if not self.head:
            self.head = Node(None, value, None)
            self.tail = self.head
            self.length += 1
        else:
            newNode = Node(self.tail, value, None)
            self.tail.next = newNode
            self.tail = newNode
            self.length += 1

    def prepend(self, value):
        if not self.head:
            self.head = Node(None, value, Node)
            self.length += 1
        else:
            newNode = Node(None, value, self.head)
            self.head.prev = newNode
            self.head = newNode
            self.length += 1

    def traverse(self, index):
        currNode = self.head
        for node in range(0, index):
            currNode = currNode.next

        return currNode

    def insert(self, index, value):
        try:
            if index == 0:
                self.prepend(value)
            elif index == self.length:
                self.append(value)
            else:
                prevNode = self.traverse(index - 1)
                nextNode = self.traverse(index)
                newNode = Node(prevNode, value, nextNode)
                prevNode.next = newNode
                nextNode.prev = newNode
                self.length += 1
        except AttributeError:
            pass

    def delete(self, value):
        currNode = self.head
        while currNode != None:
            if currNode.value == value:
                prevNode = currNode.prev
                nextNode = currNode.next
                currNode.next = None
                currNode.prev = None
                prevNode.next = nextNode
                nextNode.prev = prevNode
                self.length -= 1
                return
            currNode = currNode.next

    def delete_at_index(self, index):
        if index == 0:
            self.delete(self.head.value)
        elif index == self.length - 1:
            newNode = self.tail.prev
            newNode.next = None
            self.tail.prev = None
            self.tail = newNode
            self.length -= 1
        else:
            prevNode = self.traverse(index - 1)
            nextNode = self.traverse(index + 1)
            delNode = prevNode.next
            delNode.next = None
            delNode.prev = None
            nextNode.prev = prevNode
            prevNode.next = nextNode
            self.length -= 1

    def deleteAllNodesWithValue(self, value):
        currNode = self.head
        while currNode != None:
            if currNode.value == value:
                if currNode == self.head:
                    self.delete_at_index(0)
                elif currNode == self.tail:
                    self.delete_at_index(self.length - 1)
                else:
                    prevNode = currNode.prev
                    nextNode = currNode.next
                    currNode.next = None
                    currNode.prev = None
                    prevNode.next = nextNode
                    nextNode.prev = prevNode
                    currNode = prevNode
                    self.length -= 1

            currNode = currNode.next

    def peek(self):
        tempNext = self.tail.next
        tempPrev = self.tail.prev
        tempValue = self.tail.value
        return {
            "prev": tempPrev,
            "value": tempValue,
            "next": tempNext,
        }

    def show(self):
        currNode = self.head
        ans = {}
        for index in range(0, self.length):
            ans[index] = currNode.value
            currNode = currNode.next

        return ans

    def showRecursive(self, node):
        if node == None:
            return
        else:
            if node.prev == None:
                print(f"None <-- {node.value}", end=" <--> ")
            elif node.next == None:
                print(f"{node.value}", end=" --> None")
            else:
                print(node.value, end=" <--> ")
            return self.showRecursive(node.next)


llist1 = LinkedList()
llist1.append(34)
llist1.append(16)
llist1.append(47)
llist1.append(47)
llist1.append(47)
llist1.append(47)
llist1.prepend(51)
llist1.insert(2, 23)
llist1.delete(16)
llist1.delete_at_index(2)
llist1.deleteAllNodesWithValue(47)
# print(llist1.show())
# print(llist1.peek())
llist1.showRecursive(llist1.head)
