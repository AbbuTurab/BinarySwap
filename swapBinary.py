def minswap(s1, s2):
    count = 0
    for i in range(len(s1)):
        if s1[i] != s2[i]:
            count += 1
            print(count)

    if count % 2 == 0:
        print(count // 2)
    else:
        print("not possible")


s1 = "110011"
s2 = "010111"
minswap(s1, s2)
