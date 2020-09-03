class Node:
    def __init__(self, data):
        self.next = None
        self.data = data


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head == None:
            self.head = new_node
            return
        else:
            last_node = self.head
            while last_node.next != None:
                last_node = last_node.next

    def show(self):
        current_node = self.head
        while self.next != None:
            print("")


llist = LinkedList()
llist.append("A")
llist.append("B")
