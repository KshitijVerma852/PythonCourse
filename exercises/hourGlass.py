from math import ceil as up

no_of_stars = int(input(">> "))
temp_spaces = no_of_stars
if no_of_stars % 2 == 0:
    no_of_stars += 1

spaces = 0
theMidPoint = up(no_of_stars / 2)
temp_stars = no_of_stars

for x in range(0, theMidPoint):

    for y in range(0, spaces):
        print("", end=" ")
    spaces += 1

    for z in range(0, temp_stars):
        print("*", end="")

    temp_stars -= 2
    print()

no_of_stars = 3
spaces = theMidPoint - 1
for a in range(0, theMidPoint - 1):

    for b in range(0, spaces - 1):
        print(" ", end="")
    spaces -= 1

    for c in range(0, no_of_stars):
        print("*", end="")
    no_of_stars += 2

    print()
