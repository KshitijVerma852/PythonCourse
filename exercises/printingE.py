from math import ceil as up
rows = int(input(">> "))
if rows % 2 == 0:
    rows += 1
topAndBottomDashes = rows
middleDashes = up(rows / 2) - 1

for x in range(0, rows):
    if x == 0 or x == rows - 1:
        print("+", end="")
        for y in range(0, topAndBottomDashes):
            print("=", end="")
        print()
    elif x == middleDashes:
        print("|", end="")
        for z in range(0, topAndBottomDashes - 1):
            print("=", end="")
        print()
    else:
        print("|", end="")
        print()
