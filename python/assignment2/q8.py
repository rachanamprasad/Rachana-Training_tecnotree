def count_letters(string):
    counts = {}
    for letter in string:
        if letter in counts:
            counts[letter] += 1
        else:
            counts[letter] = 1
    return counts

string = "rachana"
print("The string is:", string)
letter_counts = count_letters(string)
print("The letter counts are:", letter_counts)
