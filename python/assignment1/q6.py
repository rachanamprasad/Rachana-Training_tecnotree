n = input("Enter number: ").split()
n = [int(num) for num in n]

if len(n) == 0:
    print("Empty list")
else:
    smallest = min(n)
    largest = max(n)
    print("Smallest number: ", smallest)
    print("Largest number: ", largest)
