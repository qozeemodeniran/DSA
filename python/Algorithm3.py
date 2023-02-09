# Algorithm 3: Find Roots of a Quadratic Equation ax2 + bx + c = 0
import math
a = int(input("Enter value of a: "))
b = int(input("Enter value of b: "))
c = int(input("Enter value of c: "))
D = (b*b) - 4*a*c
if D >= 0:
  r1 = (-b + math.sqrt(D))/(2*a)
  r2 = (-b - math.sqrt(D))/(2*a)
  print("The roots are: ", r1, "and", r2)
else:
  rp = -b/(2*a)
  ip = math.sqrt(-D)/(2*a)
  print("The roots are: ", rp, "+j", ip, "and", rp, "-j", ip)