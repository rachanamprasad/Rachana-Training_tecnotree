numbers = [4, 8, 2, 6, 5, 3, 9]
numbers.sort()
length = len(numbers)

# returns the median value.
if length % 2 == 0:
    middle1 = length//2
    middle2 = middle1 - 1
    median = (numbers[middle1] + numbers[middle2])/2
else:
    middle = length//2
    median = numbers[middle]

print("The median value of the list is:", median)
