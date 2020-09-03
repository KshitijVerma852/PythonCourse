from math import ceil as up
rows = int(input(">> "))
spaces = rows
peak = 1
middleSpaces = 3
line = int(up(rows / 2))

for x in range(0, rows):

    if x == 0:
        for y in range(0, spaces+1):
            print("", end=" ")
        print("^", end="")
        print()
        spaces -= 1

    else:
        if x == line:
            for d in range(0, spaces):
                print("", end=" ")
            print("/", end="")
            for e in range(0, middleSpaces):
                print("_", end="")
            spaces -= 1
            middleSpaces += 2
            print(r"\ ", end="")
            print()
        for b in range(0, spaces):
            print("", end=" ")
        print("/", end="")
        for c in range(0, middleSpaces):
            print("", end=" ")
        print(r"\ ", end="")
        middleSpaces += 2
        spaces -= 1
        print()
