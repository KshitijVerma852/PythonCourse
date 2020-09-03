word = input(">> ")
reverseList = []
isPalindrome = False


def reverseWord(word):
    for x in range(len(word), 0, -1):
        reverseList.append(word[x - 1])


reverseWord(word)

for x in range(0, len(word)):
    if reverseList[x] == word[x] or reverseList[x].upper() == word[x] or reverseList[x] == word[x].upper():
        isPalindrome = True
    else:
        print("\nNot a palindrome.")
        break

if isPalindrome:
    print("\nPalindrome")
