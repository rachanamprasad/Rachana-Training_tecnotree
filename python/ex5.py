num_list = input("Enter numbers: ").split()
odd_nums = list(filter(lambda x: int(x) % 2 ! = 0, num_list))
odd_nums_squared = list(map(lambda x: int(x)**2, odd_nums))
print("The odd numbers in the list are:", odd_nums_squared)
