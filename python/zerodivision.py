while True:
    try:
        num=int(input("enter first number:"))
        den=int(input("enter second number:"))
        res=num/den
        print("The division result is:",res)
    except ZeroDivisionError:
        print("Enter valid denominator")

    
