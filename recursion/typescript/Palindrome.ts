

function isPalindrome(word: string): boolean {
  if (word.length <= 1) {
    return true;
  }
  else {
    return word[0] === word[word.length - 1] && isPalindrome(word.slice(1, word.length - 1));
  }
}

console.log(isPalindrome("civic"))
console.log(isPalindrome("foo"))
console.log(isPalindrome("racecar"))
