/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function findFactorialNr(n) {
if (n <= 0) return 1;
return n * findFactorialNr(n - 1)
}

findFactorialNr(5);   // 120
findFactorialNr(10);   // 3628800
findFactorialNr(20);   // 2432902008176640000
findFactorialNr(0);   // 1
