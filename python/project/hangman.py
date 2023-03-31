# hangman game program

import random

words = [ "programming", "computer", "algorithm","machine"]

word = random.choice(words)

hidden_word = ["_"] * len(word)

incorrect_guesses = 0

while "_" in hidden_word and incorrect_guesses < 6:
    print(" ".join(hidden_word))

    guess = input("Guess a letter: ").lower()

    if guess in word:
        for i in range(len(word)):
            if word[i] == guess:
                hidden_word[i] = guess
    else:
        incorrect_guesses += 1
        print(f"Incorrect! You have {6 - incorrect_guesses} guesses left.")

if "_" not in hidden_word:
    print("Congratulations! You guessed the word.")
else:
    print(f"Sorry, you lost. The word was {word}.")
