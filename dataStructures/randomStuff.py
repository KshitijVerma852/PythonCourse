from functools import reduce

nums = [3, 2, 6, 8, 4, 6, 2, 9]

evens = list(filter(lambda num: num % 2 == 0, nums))
print(f"filter: {evens}")

doubles = list(map(lambda num: num * 2, evens))

print(f"Map: {doubles}")

sum = reduce(lambda num, num2: num + num2, doubles)

print(f"Reduce: {sum}")
