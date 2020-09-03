from random import randrange
from math import ceil

nums = []

for x in range(0, 20):
    randNum = randrange(0, 100)
    nums.append(randNum)


def selection_sort(nums):
    for x in range(0, len(nums)):
        found = False
        small = nums[x]
        for y in range(x, len(nums)):
            if nums[y] < small:
                small = nums[y]
                found = True
                index = y
        if found:
            nums[x], nums[index] = small, nums[x]


def binary_search(nums, theNum):
    high = int(len(nums) - 1)
    low = 0
    while high > low:
        mid = int(ceil((high + low) / 2))
        if nums[low] == theNum or nums[mid] == theNum or nums[high] == theNum:
            return True
        else:
            if nums[mid] < theNum:
                low = mid
                high -= 1
            else:
                if nums[mid] > theNum:
                    high = mid
                    low += 1
                else:
                    return False


print(nums)
selection_sort(nums)
print(nums)
theNum = int(input(">> "))

if binary_search(nums, theNum):
    print("Found")
else:
    print("Not found")
