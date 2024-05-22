
def count_down_zero(n):
    print(n)
    if n == 0:
        return
    else:
        return count_down_zero(n-1)


count_down_zero(10)
