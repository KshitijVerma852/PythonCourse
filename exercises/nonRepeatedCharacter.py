theInputStr = input(">> ")

def findNonRepeatedChar(theStr):
    found = False
    for x in range(0, len(theStr) - 1):
        # Getting the current Character
        currChar = theStr[x]
        # Linear Search
        for y in range(x, len(theStr - 1)):
            if currChar == theStr