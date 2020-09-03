class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def printStack(self):
        print(self.items)

    def isEmpty(self):
        if len(self.items) == 0:
            return True
        else:
            return False

    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        else:
            return "Stack is empty"
