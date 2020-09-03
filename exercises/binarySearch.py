from random import randrange
from math import ceil

data = []

for x in range(0, 10):
    randNum = randrange(0, 20)
    data.append(randNum)


def selectionSort(data):
    for x in range(0, len(data)):
        small = data[x]
        found = False
        for y in range(x, len(data)):
            if data[y] < small:
                small = data[y]
                found = True
                index = y
        if found:
            data[x], data[index] = small, data[x]


def binarySearch(data, num):
    low = 0
    high = len(data) - 1
    while high > low:
        mid = int(ceil((high + low) / 2))
        if data[low] == num or data[mid] == num or data[high] == num:
            return True
        else:
            if data[mid] > num:
                high = mid
                low += 1
            else:
                if data[mid] < num:
                    low = mid
                    high -= 1
                else:
                    return False


print(data)
selectionSort(data)
print(data)
while True:
    theInput = int(input(">> "))

    if binarySearch(data, theInput):
        print("Found")
    else:
        print("Not found")
