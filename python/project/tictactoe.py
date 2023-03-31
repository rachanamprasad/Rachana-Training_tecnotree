# Tic-Tac-Toe game 

board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

#function to print the game board
def print_board():
    print("   |   |   ")
    print(f" {board[0][0]} | {board[0][1]} | {board[0][2]} ")
    print("___|___|___")
    print("   |   |   ")
    print(f" {board[1][0]} | {board[1][1]} | {board[1][2]} ")
    print("___|___|___")
    print("   |   |   ")
    print(f" {board[2][0]} | {board[2][1]} | {board[2][2]} ")
    print("   |   |   ")

# function to check if a player has won
def check_win(player):
    # check rows
    for row in board:
        if row.count(player) == 3:
            return True

    # check columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] == player:
            return True

    # check diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False

#main game loop
player = "X"
while True:
    print_board()

    row = int(input(f"{player}, choose a row (1-3): ")) - 1
    col = int(input(f"{player}, choose a column (1-3): ")) - 1

    if row < 0 or row > 2 or col < 0 or col > 2 or board[row][col] != " ":
        print("Invalid move. Try again.")
        continue

    board[row][col] = player

    if check_win(player):
        print_board()
        print(f"{player} wins!")
        break

    if all(all(row != " " for row in board) for board in board):
        print_board()
        print("Tie!")
        break

    player = "O" if player == "X" else "X"
