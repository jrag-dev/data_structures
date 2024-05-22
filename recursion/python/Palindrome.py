def is_palindrome(word):
    if (len(word) <= 1):
        return True
    else:
        return word[0] == word[-1] and is_palindrome(word[1:-1])


print(is_palindrome("civic"))
print(is_palindrome("foo"))
print(is_palindrome("racecar"))
