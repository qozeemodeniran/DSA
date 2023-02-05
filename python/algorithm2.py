# Algorithm 2: Find the largest number among three numbers
# step 1: start
# step 2: delacre, read, adn assign user's input using List Compreshension
number1, number2, number3 = [int(numbers) for numbers in input("Enter three integers separated by comma: ").split(",")]

# step 3: check if number1 > number2
if number1 > number2:
    # step 3-a: check if number1 > number3
    if number1 > number3:
        # step 3-b: if true, conclude that number 1 is the largest
        print(f"{number1} is the largest of {number1}, {number2}, and {number3}")
    else:
        # step 3-c if false, coslude that number3 is the largest
         print(f"{number3} is the largest of {number1}, {number2}, and {number3}")
# step 4: Else, check if number2 > number3
else:
    if number2 > number3:
        # step 4-a: conclude that number2 is the largest
         print(f"{number2} is the largest of {number1}, {number2}, and {number3}")
    else:
        # step 4-b: if false, conlcude that number3 is the largest
        print(f"{number3} is the largest of {number1}, {number2}, and {number3}")

# step 5: stop