def primenumbers(numbers):

    primes = []
    for number in numbers:
        if number > 1: 
            is_prime = True
            for i in range(2, number):
                if number % i == 0:  
                    is_prime = False
                    break
            if is_prime:
                primes.append(number)
    return primes

l=[]
a=int(input("Enter the number: "))
for i in range(a):
    e=int(input(f"Enter the elements {i+1}: "))
    l.append(e)

print(primenumbers(l))