num = int(input(">> "))

def sumOfNums(num):
    if num == 1:
        return 1
    return num + sumOfNums(num - 1)

print(sumOfNums(num))