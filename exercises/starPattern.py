from math import ceil

height = int(input(">> "))
width = (height * 2) - 1
rows = (height * 2) + 1
stars = 1
spaces = (height * 2) - 1
topAndBottomRows = ceil(rows / 2)

for x in range(0, height):

    for y in range(0, spaces):
        print(" ", end="")

    for z in range(0, stars):
        print("*", end="")

    stars += 2
    spaces -= 1
    print()

spaces = height - 1
stars = 1
midspaces = width
for x in range(0, width - 1):

    if x < height:
        for y in range(0, spaces):
            print(" ", end="")

        for z in range(0, stars):
            print("*", end="")

        for a in range(0, midspaces):
            print(" ", end="")

        for b in range(0, stars):
            print("*", end="")

        stars += 1
        spaces -= 1
        print()

    else:
        spaces = 1
        stars = height - 1

        while True:
            if stars == 1:
                break
            for y in range(0, spaces):
                print(" ", end="")

            for z in range(0, stars):
                print("*", end="")

            for a in range(0, midspaces):
                print(" ", end="")

            for b in range(0, stars):
                print("*", end="")

            stars -= 1
            spaces += 1
            print()
            if stars == 0:
                break

        for l in range(0, height - 1):
            print(" ", end="")

        for m in range(0, 1):
            print("*", end="")

        for n in range(0, midspaces):
            print(" ", end="")

        for o in range(0, 1):
            print("*", end="")

        print()
        break

spaces = height
stars = width
for y in range(0, height):

    for x in range(0, spaces):
        print(" ", end="")

    for z in range(0, stars):
        print("*", end="")

    stars -= 2
    spaces += 1
    print()
