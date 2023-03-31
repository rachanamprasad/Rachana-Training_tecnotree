def is_palindrome(s):
    return s == s[::-1]

def get_palindromes(strings):
    palindromes = []
    for s in strings:
        if is_palindrome(s):
            palindromes.append(s)
    return palindromes

strings = ["rachana", "madam", "python", "level"]
print("The original list:", strings)
palindromes = get_palindromes(strings)
print("The palindromes are:", palindromes)
