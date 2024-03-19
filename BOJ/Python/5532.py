l = int(input())
a = int(input())
b = int(input())
c = int(input())
d = int(input())

if a%c == 0:
    val1 = a//c
else:
    val1 = (a//c) + 1
    
if b%d == 0:
    val2 = b//d
else:
    val2 = (b//d) + 1 

print(l - max(val1, val2))