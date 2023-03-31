# quiz program

# function to read file and return a list of questions and answers
def read_quiz_file(filename):
    with open(filename, 'r') as f:
        quiz = f.read().split("\n\n")
    return quiz[:4]  # select first four questions

#  function to display a question and its options, and prompt for an answer
def ask_question(question):
    options = question.split("\n")[1:-1]
    print(question.split("\n")[0])
    for i, option in enumerate(options):
        print(f"{chr(ord('A')+i)}. {option}")
    user_answer = input("Answer: ")
    return user_answer.upper()

# Read file
quiz = read_quiz_file("quiz.txt")

# Initialize the score
score = 0

# Loop through each question in the quiz
for i in range(len(quiz)):
    # Ask the question and get the user's answer
    user_answer = ask_question(quiz[i])
    
    # Get the correct answer from the question string
    correct_answer = quiz[i].split("Answer: ")[1]
    
    # Check if the user's answer is correct
    if user_answer == correct_answer:
        print("Correct!")
        score += 1
    else:
        print("Incorrect.")
        
# Display the final score
print(f"Your score is {score}/{len(quiz)}.")
