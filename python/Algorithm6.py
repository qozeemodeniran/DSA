# Algorithm 6: Find the Fibonacci series till the term less than 1000

first_term = 0
second_term = 1
print(first_term, second_term)

while second_term < 1000:
    temp = second_term
    second_term = second_term + first_term
    first_term = temp
    if second_term < 1000:
        print(second_term)