num = int(input(">> "))


def factorialIterative(num):
    ans = 1
    for x in range(1, num + 1):
        ans *= x

    return ans


def factorialRecursive(num):
    if num == 0 or num == 1:
        return 1
    return num * factorialRecursive(num - 1)

print(factorialRecursive(num))