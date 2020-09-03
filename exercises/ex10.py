from math import ceil as up
num = int(input(">> "))

spaces = 0
stars = num
no_of_spaces = int(up(num / 2))

for x in range(0, num):
    if x == 0 or x == (num - 1):
        for y in range(0, stars):
            print("*", end="  ")
        print()
    else:
        print("*", end="")
        for a in range(0, no_of_spaces):
            print("   ", end="  ")
        print("*", end=" ")
        print()
