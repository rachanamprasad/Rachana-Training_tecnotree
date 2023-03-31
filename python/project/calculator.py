# calculator program
def calculator():
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    operator = input("Enter the operator: ")

    if operator == "+":
        result = num1 + num2
    elif operator == "-":
        result = num1 - num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "/":
        result = num1 / num2
    elif operator == "%":
        result = num1 % num2
    else:
        print("Invalid operator")
        return

    print("The result is ",result)

calculator()
