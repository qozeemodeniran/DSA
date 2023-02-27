number = int(input("Enter the value of the number of which factorial you want to find: "))
factorial = 1

for i in range(1, number+1):
    factorial *= i
print(f"The factorial of {number} is {factorial}")