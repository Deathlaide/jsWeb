function palindrome(str)
{
    reverse = str.split("").reverse().join("");
    return str.toLowerCase() == reverse.toLowerCase();
}

console.log(palindrome("raceCAR"));     //true
console.log(palindrome("table"));       //false
console.log(palindrome("dog,.,god"));   //true
console.log(palindrome("o, x o"));      //false