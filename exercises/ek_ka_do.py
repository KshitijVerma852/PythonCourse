rows = int(input(">> "))
if rows % 2 == 0:
    rows += 1

endSpaces = rows - 1
middleSpaces = rows * 2 - 2
stars = 1

for x in range(0, rows):
    for y in range(0, endSpaces):
        print(" ", end="")

    for z in range(0, stars):
        print("*", end="")

    for a in range(0, middleSpaces):
        print(" ", end="")
    middleSpaces -= 2

    for z in range(0, stars):
        print("*", end="")

    for y in range(0, endSpaces):
        print(" ", end="")

    print()
    endSpaces -= 1
    stars += 2
