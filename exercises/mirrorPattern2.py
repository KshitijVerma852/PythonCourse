from math import ceil, floor

rectangleStarWidth = int(input(">> "))
rectangleStarHeight = int(input(">> "))
gapLines = int(ceil(rectangleStarWidth - rectangleStarHeight) / 2)
spaces = gapLines
innerPatternHeight = int(rectangleStarWidth / 3)
stars = int(rectangleStarWidth - (gapLines * 2 - 2))
leftStars = int(floor(stars / 2) + 1)
RightStars = int(floor(stars / 2))

for x in range(0, rectangleStarHeight):
    for y in range(0, rectangleStarWidth):
        print("*", end="")
    print()

    for z in range(0, gapLines):
        print("*", end="")

        for a in range(0, rectangleStarWidth - 2):
            print("", end=" ")
        print("*", end="")
        print()
    print("*", end="")

    for b in range(0, innerPatternHeight):
        print("*", end="")
        for c in range(0, spaces):
            print("", end=" ")

        for d in range(0, leftStars):
            print("*", end="")

        if b == 0:
            leftStars -= 1
        else:
            leftStars -= 2

print(leftStars)
print(RightStars)
