#  takes a string and returns a new string with all the vowels removed.

name=input("Enter a name:")
vowels=['a','e','i','o','u','A','E','I','O','U']
result=""

for i in range(len(name)):
    if name[i] not in vowels:
        result=result+name[i]

print("After removing the vowels:",result)
  
       
