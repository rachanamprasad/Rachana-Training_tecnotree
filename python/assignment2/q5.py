# takes two lists of numbers and returns a new list with the elements that appear in both lists

list1 = [1, 2, 4, 3, 5]
list2 = [4, 5, 1, 7, 8]

common_list = []
for element in list1:
    if element in list2:
        common_list.append(element)

print(common_list)  
