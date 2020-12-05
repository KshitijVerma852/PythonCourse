class Node:
    def __init__(self, left, value, right):
        self.left = left
        self.value = value
        self.right = right
    
class Tree:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        newNode = Node(None, value, None)
        if self.root == None:
            self.root = newNode
        else:
            pass

tr1 = Tree()
tr1.insert(2)

