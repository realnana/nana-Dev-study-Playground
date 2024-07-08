n = list(map(int, input().split()))

if n == sorted(n):
    print("ascending")
elif n == sorted(n, reverse=True):
    print("descending")
else:
    print("mixed")




# 딕셔너리 만들어서 입력값과 비교
# dic = {'1': 'c', '2': 'd', '3': 'e', '4': 'f', '5': 'g', '6': 'a', '7': 'b', '8': 'C'}
# 오름차순 list(dic.keys()).sort()
# 내림차순 list(dic.keys()).sort(reverse=True)
