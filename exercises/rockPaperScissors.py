import random

user_choices = input(">> ")

options = ["Rock", "Paper", "Scissor"]

my_choice = random.choice(options)

if user_choices == "Rock" and my_choice == "Paper":
    print(f"I chose {my_choice}")
    print("You lost")
elif user_choices == "Rock" and my_choice == "Scissor":
    print(f"I chose {my_choice}")
    print("You won")
elif user_choices == "Paper" and my_choice == "Scissor":
    print(f"I chose {my_choice}")
    print("You lost")
elif user_choices == "Paper" and my_choice == "Rock":
    print(f"I chose {my_choice}")
    print("You won")
elif user_choices == "Scissor" and my_choice == "Rock":
    print(f"I chose {my_choice}")
    print("You lost")
elif user_choices == "Scissor" and my_choice == "Paper":
    print(f"I chose {my_choice}")
    print("You won")
