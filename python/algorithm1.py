# Algorithm 1: Add two numbers entered by the user
# step 1: Start
# step 2: variables declaration of number1, number2, and sum
number1=0
number2=0
sum=0
# step 3: read the values of number1, and number2 entered by the user
number1 = int(input("Enter number1: "));
number2 = int(input("Enter number2: "));
# step 4: add number1 and number2, then assign the result to sum
sum = number1 + number2
# step 5: display sum
print("The sum of {} and {} is {}".format(number1, number2, sum))