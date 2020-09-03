from functools import reduce
from random import randrange

lst = []

for x in range(0, 10):
    randNum = randrange(0, 20)
    lst.append(randNum)

print(lst)

double = list(map(lambda x: x * 2, lst))

print(double)

sum = reduce(lambda x, y: x + y, double)

print(sum)
