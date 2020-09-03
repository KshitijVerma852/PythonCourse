n = 18
wrongCounter = 0

while True:
    guess = int(input(">> "))

    if guess < n:
        print("You guessed too low! ")
        wrongCounter += 1
    elif guess > n:
        print("You guessed too high! ")
        wrongCounter += 1
    else:
        print("Got it right!! ")
        if wrongCounter == 0:
            print("You got it first try!! ")
        else:
            print(f"It took you {wrongCounter} guesses")
        playAgain = input("Wanna play again? y/n ")

        if playAgain == "y":
            pass
        else:
            print("GAME OVER")
            break
