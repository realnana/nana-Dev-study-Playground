while True:
    n = list(map(int, input().split()))
    if n[0] == 0 and n[1] == 0 and n[2] == 0:
        break
    n.sort()
    if n[2]**2 == n[0]**2 + n[1]**2:
        print("right")
    else:
        print("wrong")