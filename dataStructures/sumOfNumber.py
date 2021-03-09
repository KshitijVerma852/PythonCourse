num = input(">> ")
length = len(num)
num = int(num)
ans = 0

for x in range(0, length):
    reminder = num % 10
    num = int((num / 10))
    ans += reminder
num = ans
while len(str(ans)) > 1:
    ans = 0
    for x in range(0, length):
        reminder = num % 10
        num = int((num / 10))
        ans += reminder
    print(ans)
    num = ans
    length = len(str(ans))
