num_list = input("Enter numbers: ").split()  
even_sum = 0
for num in num_list:
    if int(num) % 2 == 0:  
        even_sum += int(num)  

print("The sum of even numbers in the list is:", even_sum)
