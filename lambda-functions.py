# minus = lambda x, y: x - y
#
# print(minus(6, 2))



from math import pi as PI
import mapFilterReduce
print(round(PI, 2))

add = lambda x, y:  x + y

print(add(3, 4))


# array = [24, 45, 13]

# newArray = mapFilterReduce.reduce(lambda x, y : x * y)

# print(newArray)
import random
array = []

for x in range(0, 10):
    array.append(random.randrange(0, 10))

print(array)
