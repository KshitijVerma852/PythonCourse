# Name: Kshitij Verma
# Date: 09/03/2021
# Task: Coffee shop program

# Importing the required in-built modules

from random import randrange

print()

# Initialising the variables at the start

noOfItems = int(input("Enter the number of items>> ")) 
randNum = randrange(1, 11) # Generating a random number between 0 and 10
finalPrice = 0 # Setting the final price at the start to be 0

# Informing the user of the options available

print()
print("Please enter 't' if the item was a tea.")
print("Please enter 'c' if the item was a coffee.")
print("Please enter 'b' if the item was a biscuit.")
print()

# Looping through n number of times to get the input

for x in range(0, noOfItems):
    # Getting the input from the user
    item = input(
        "Please enter the type of item>> ")

    if item == "c":         # Checking to see if the item is a coffee, if so then the finalPrice will be inceremented by 2.25
        finalPrice += 2.25
    elif item == "t":       # Checking to see if the item is a tea, if so then the finalPrice will be inceremented by 1.85
        finalPrice += 1.85
    elif item == "b":       # Checking to see if the item is a biscuit, if so then the finalPrice will be inceremented by 3.05
        finalPrice += 3.05

print()

# Checking the random number and changing the price accordingly

if randNum == 1: # Checking whether the random number is a 1, if so then the finalPrice variable will be set to 0
    finalPrice = 0
elif randNum > 1 and randNum < 7: # Checking whether the random number is between 2 and 6 (inclusive), if so then the final variable will be halfed
    finalPrice /= 2

# Dispating the output

print(f"The random number was {randNum}", end=" ") # Dispaying the random number
print(f"and hence, your total bill was £{'{:.2f}'.format(round(finalPrice, 2))}") # Displaying the final price rounded to 2 decimal places
