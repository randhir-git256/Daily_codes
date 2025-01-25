// Check the number is palindrome or not

function palindromeCheck(number) {
    let startNum = number.toString();
    return isPalindrome(startNum, 0, startNum.length -1);
}

function isPalindrome(str, start, end) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);

}

console.log(palindromeCheck(222));
console.log(palindromeCheck(124));
console.log(palindromeCheck(12321));



