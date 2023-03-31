# todo list program

# file path 
file_path = "todo.txt"

# function to read items from file
def read_items():
    with open(file_path, "r") as file:
        items = file.readlines()
    return items

# function to display items
def display_items():
    items = read_items()
    if not items:
        print("No items in the to-do list")
    else:
        print("To-Do List:")
        for index, item in enumerate(items):
            print(f"{index+1}. {item.strip()}")

# function to add an item
def add_item():
    item = input("Enter the task to be added: ")
    with open(file_path, "a") as file:
        file.write(f"{item}\n")
    print(f"{item} has been added to the to-do list.")

# function to remove an item
def remove_item():
    items = read_items()
    if not items:
        print("No items in the to-do list")
    else:
        display_items()
        index = int(input("Enter the index of the item to be removed: "))
        if index < 1 or index > len(items):
            print("Invalid index.")
        else:
            removed_item = items.pop(index-1)
            with open(file_path, "w") as file:
                file.writelines(items)
            print(f"{removed_item.strip()} has been removed from the to-do list.")

# function to update an item
def update_item():
    items = read_items()
    if not items:
        print("No items in the list")
    else:
        display_items()
        index = int(input("Enter the index of the item to be updated: "))
        if index < 1 or index > len(items):
            print("Invalid index. Please enter a valid index.")
        else:
            new_item = input("Enter the new task: ")
            items[index-1] = f"{new_item}\n"
            with open(file_path, "w") as file:
                file.writelines(items)
            print(f"Task {index} has been updated to {new_item}.")


# main function 
def main():
    while True:
        print("\nMenu:")
        print("1. Display", "2. Add", "3.Remove", "4.Update")
        choice = input("Enter your choice (1-4): ")
        if choice == "1":
            display_items()
        elif choice == "2":
            add_item()
        elif choice == "3":
            remove_item()
        elif choice == "4":
            update_item()
        else:
            print("Invalid choice")

# call the main function
main()
