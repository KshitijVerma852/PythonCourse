list1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

for x in range(0, len(list1) - 1):
    if list1[x] > 150:
        break
    elif list1[x] % 5 == 0:
        print(list1[x])
