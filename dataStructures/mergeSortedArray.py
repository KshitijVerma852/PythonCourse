from math import ceil

array1 = [0, 3, 5, 31]
array2 = [4, 6, 30]

'''
0: Create a new array of size = len(array1) + len(array2) = array3
00: Copy all elements of array1 into new array 
1: For each each ele of array2
    2: Using Binary search in array3, find the index to insert ele from step 1
    3: Place the ele in the index position of aaray3 and shuffle the elements in array3
'''

def findIndexPositionForEle(e) :
    # Write logix to find index
    return 0

def copeElementAtIndexAndShuffleArray(index, ele):
    pass
    # copy ele and sguffle


def mergeSortArray(array1, array2):
    midOfArray1 = int(ceil(len(array1) / 2))
    # print(midOfArray1)
    for x in range(0, len(array2)):
        if array2[x] > array1[midOfArray1]:
            tempNewArray = []
            for y in range(midOfArray1, len(array1)):
                tempNewArray.append(array1[y])
            for z in range(midOfArray1, len(array1)):
                array1[z] = None
            array1.append(None)
            array1[midOfArray1] = array2[x]
            m = 0
            for a in range(midOfArray1 + 1, len(array1)):
                array1[a] = tempNewArray[m]
                m += 1
        else:
            # print()
            tempNewArray = []
            for y in range(0, midOfArray1):
                tempNewArray.append(array1[y])
            for z in range(0, midOfArray1):
                array1[z] = None
            array1.insert(0, None)
            array1[midOfArray1] = array1[x]
            for a in range(0, midOfArray1):
                array1.insert(a, tempNewArray[x])
        # midOfArray1 += 1

    print(array1)


mergeSortArray(array1, array2)
