# takes a list of words and returns the longest word in the list.

def longest_word(my_list):
   max_length = len(my_list[0])
   temp = my_list[0]

   for element in my_list:
      if(len(element) > max_length):
         max_length = len(element)
         temp = element
   return temp

my_list = ["rachana", "arjun", "prasad"]
print("The list is :",my_list)
print("The longest word is :", longest_word(my_list))
