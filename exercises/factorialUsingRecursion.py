num = int(input(">> "))


def factorialCalc(num):
    if num == 1:
        return 1
    return num * factorialCalc(num - 1)


ans = factorialCalc(num)

print(ans)
