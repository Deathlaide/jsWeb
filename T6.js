function countVowels(str)
{ 
	let count = 0;
	vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let char of str)
	{
		if (vowels.includes(char))
		{
			count++;
		}
	}
    return count;
}

console.log(countVowels("hello"));          // 2
console.log(countVowels("why"));            // 0
console.log(countVowels("I love bees <3")); // 4
console.log(countVowels("beeautiful"));     // 6