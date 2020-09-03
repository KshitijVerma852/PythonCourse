nums = [5, 3, 8, 6, 7, 2]

for x in range(0, len(nums)):
    low = nums[x]
    shouldSwap = False
    for y in range(x, len(nums)):
        numAtY = nums[y]
        if low > numAtY:
            low = numAtY
            index = y
            shouldSwap = True

    if shouldSwap:
        temp = nums[x]
        nums[x] = low
        nums[index] = temp

print(nums)
