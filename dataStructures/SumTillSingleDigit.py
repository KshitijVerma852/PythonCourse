num = input(">> ")
length = len(num)
num = int(num)

if num <= 10:
    print("Sum is ", num)
else:
    while(num > 10):
        sum = 0        
        # calculate the sum
        while (num > 0):
            reminder = num % 10 #3, 123
            num = int(num / 10) # 12
            sum += reminder 
        num = sum
    print("Final sum ", sum)