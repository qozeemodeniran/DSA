# Algorithm 5: Check whether a number is prime or not

n, i, flag = 0, 2, 1
n = int(input("Enter a number: "))

while i<= n//2:
    if n%i==0:
        flag=0
        break
    i+=1

if flag==0:
    print(n, " is not prime")
else:
    print(n, " is prime")