def sq_list(n):
    sq_no = []
    for num in n:
        sq_no.append(num**2)
    return sq_no

n = [1, 2, 3, 4, 5]
print("The original list of numbers is:", n)
sq_no = sq_list(n)
print("The list with elements squared is:", sq_no)
