from random import *

num1 = float(input(">> "))
num2 = float(input(">> "))
operation = input(">> ")


class Calculator:
    def __init__(self, num1, num2, color):
        self.num1 = num1
        self.num2 = num2
        self.color = color

    def add(self):
        return self.num1 + self.num2

    def minus(self):
        return self.num2 - self.num2

    def mul(self):
        return self.num1 * self.num2

    def div(self):
        return self.num1 / self.num2


redCalcukator = Calculator(num1, num2, "Red")

if operation == "+":
    print(f"Your {redCalcukator.color} calculator Calculated the answer:  {redCalcukator.add()}")
elif operation == "-":
    print(f"Your {redCalcukator.color} calculator Calculated the answer:  {redCalcukator.minus()}")
elif operation == "*" or operation == "x":
    print(f"Your {redCalcukator.color} calculator Calculated the answer:  {redCalcukator.mul()}")
elif operation == "/":
    print(f"Your {redCalcukator.color} calculator Calculated the answer:  {redCalcukator.div()}")
else:
    print("Invalid operation")
