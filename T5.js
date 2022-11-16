function Fizzbuzz(n)
{
    for (let i = 1, str = ""; i <= n; i++, str = "")
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            console.log("fizzbuzz");
        }
        else if (i % 3 == 0)
        {
            console.log("fizz");
        }
        else if (i % 5 == 0)
        {
            console.log("buzz");
        }
        else console.log(i);
    }
}

Fizzbuzz(20);
// Результат:
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// 16
// 17
// fizz
// 19
// buzz