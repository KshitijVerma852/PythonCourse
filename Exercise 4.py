from math import ceil

SIGN = "*"

rightAndLeftWidth = int(input("rightAndLeftWidth>> "))
rightAndLeftHeight = int(input("rightAndLeftHeight>> "))
topAndBottomWidth = int(input("topAndBottomWidth>> "))
topAndBottomHeight = int(input("topAndBottomHeight>> "))

spaces = rightAndLeftWidth + topAndBottomHeight - 1
stars = 1
for x in range(0, topAndBottomHeight):

    for y in range(0, spaces):
        print(" ", end="")
    spaces -= 1

    for z in range(0, stars):
        print(SIGN, end="")
    print()
    stars += 2

spaces = 0
stars = rightAndLeftWidth
constSpaces = topAndBottomWidth

for a in range(0, rightAndLeftHeight):

    for b in range(0, spaces):
        print(" ", end="")
    spaces += 1
    for c in range(0, stars):
        print(SIGN, end="")
    for d in range(0, constSpaces):
        print(" ", end="")
    for e in range(0, stars):
        print(SIGN, end="")
    stars -= 1
    print()

spaces = rightAndLeftWidth
stars = topAndBottomWidth

for f in range(0, topAndBottomHeight):

    for g in range(0, spaces):
        print(" ", end="")
    spaces += 1
    for h in range(0, stars):
        print(SIGN, end="")
    stars -= 2
    print()
