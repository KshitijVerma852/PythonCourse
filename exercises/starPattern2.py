from math import floor, ceil

while True:
    rows = int(input(">> "))
    topAndBottomSpaces = ceil(rows / 2)
    mid = floor(rows / 2)

    for x in range(0, rows):
        gap = " "
        if x == 0 or x == (rows - 1):
            print(gap, end="")
            print("*", end="")
            for y in range(0, topAndBottomSpaces):
                print(gap, end="")
            print("*", end="")
            print()
        elif x == mid:
            print(gap, end="")
            for y in range(0, topAndBottomSpaces + 2):
                print("*", end="")
            print()
        else:
            for y in range(0, 2):
                print(gap, end="")

            for z in range(0, topAndBottomSpaces):
                print("*", end="")

            print()
