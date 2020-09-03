from math import ceil

boxWidth = int(input(">> "))
boxHeight = int(input(">> "))

innerPatternStars = ceil(boxHeight / 2) - 2
midInnerPatternSpaces = 1
spaces = 0
innerSpaces = 1
innerPatternStars2 = 3
startInnerPatternSpaces2 = int((boxHeight - (innerPatternStars2 * 2)) / 3)
midInnerPatternSpaces2 = 1

for x in range(0, boxHeight):

    if x == 0 or x == boxHeight - 1:
        for y in range(0, boxWidth):
            print("*", end="")
        print()
    elif x == 1 or x == boxHeight - 2:
        spaces = boxWidth - 2
        print("*", end="")
        for y in range(0, spaces):
            print(" ", end="")
        print("*", end="")
        print()
    else:
        if innerPatternStars >= 1:
            if x == 2:
                print("*", end=" ")

                for y in range(0, boxHeight):
                    print("*", end="")

                print(" *", end="")
                print()
            else:
                print("*", end=" ")
                for y in range(0, innerSpaces):
                    print(" ", end="")

                for z in range(0, innerPatternStars):
                    print("*", end="")

                for a in range(0, midInnerPatternSpaces):
                    print(" ", end="")

                for b in range(0, innerPatternStars):
                    print("*", end="")

                for c in range(0, innerSpaces):
                    print(" ", end="")

                print(" *", end="")

                midInnerPatternSpaces += 2
                innerPatternStars -= 2
                innerSpaces += 1
                print()
        else:


            print("*", end=" ")

            for y in range(0, startInnerPatternSpaces2):
                print(" ", end="")

            for z in range(0, innerPatternStars2):
                print("*", end="")

            for a in range(0, midInnerPatternSpaces2):
                print(" ", end="")

            for b in range(0, innerPatternStars2):
                print("*", end="")

            for c in range(0, startInnerPatternSpaces2):
                print(" ", end="")

            print(" *", end="")

            startInnerPatternSpaces2 -= 1
            innerPatternStars2 += 2
            midInnerPatternSpaces2 -= 2
            if innerPatternStars2 == 5:
                print()
                print("*", end=" ")
                for k in range(0, boxHeight):
                    print("*", end="")

                print(" *", end="")

                print()
                print("*", end=" ")

                for h in range(0, boxHeight):
                    print(" ", end="")

                print(" *", end="")
                print()

                for f in range(0, boxWidth):
                    print("*", end="")
                print()
                break



            print()
