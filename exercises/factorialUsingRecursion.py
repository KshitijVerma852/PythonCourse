num = int(input(">> "))

def findFactorial(num):
    if num == 1:
        return 1
    
    return num * findFactorial(num - 1)

print(findFactorial(num))