class A:
    def __init__(self):
        print("Hello world")

class B(A):
    def __init__(self):
        super().__init__()

b1 = B()