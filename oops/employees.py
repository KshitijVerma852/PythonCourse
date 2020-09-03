class Employee:
    no_of_leaves = 8

    def __init__(self, aname, asalary, arole):
        self.name = aname
        self.salary = asalary
        self.role = arole

    def printDetails(self):
        print(f"The name is {self.name}. Salary is {self.salary} and role is {self.role}")

    @classmethod
    def change_leaves(cls, leaves):
        cls.no_of_leaves = leaves


harry = Employee("Harry", 255, "Instructor")
harry.change_leaves(10)
print(harry.no_of_leaves)
