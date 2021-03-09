nums = []

for x in range(0, 7):
    num = int(input(">> "))
    nums.append(num)

temp = len(nums) - 1

for x in range(0, len(nums) - 1):
    for y in range(0, temp):
        if nums[y] > nums[y + 1]:
            nums[y], nums[y + 1] = nums[y + 1], nums[y]

print(nums)

if __name__ == "__main__":
    print(nums)
