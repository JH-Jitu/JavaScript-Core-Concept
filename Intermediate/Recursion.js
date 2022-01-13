// Recursion => Jokhon ekta function tar nijer body r vitore nijekei call kore ,tokhon take Recursion bole

/*
 * Title: Recursion Example
 * Description: Suppose 1 theke 10 porjonto shonkha gular prottektar summation ber korte hobe..
 * 0    +   1   =   1
 *                  1   +   2   =   3
 *                                  3   +   3   =   6
 *                                                  6   +   4   =   10
 *                                 So, Formula,  f(n-1) +   n   =   f(n)
 *
 */

// Jodi For-Loop diye kori tobe..

let total = 0;
const n = 10;

for (let i = 1; i <= n; i++) {
  total += i;
}
console.log(total);

// ..............

// In Recursive way => f(n-1) + n = f(n)
const summation = (n) => {
  if (n === 0) {
    return 0;
  }
  return summation(n - 1) + n;
};

console.log(summation(4));

/*
 * Title: How does the summation(4) work?
 * Description:
 * Formula like this,
 * sum(4) = sum(4-1) + 4 = sum(3) + 4 = 6 + 4 = 10
 * sum(3) = sum(3-1) + 3 = sum(2) + 3 = 3 + 3 = 6
 * sum(2) = sum(2-1) + 2 = sum(1) + 2 = 1 + 2 = 3
 * sum(1) = sum(1-1) + 1 = sum(0) + 1 = 0 + 1 = 0
 * sum(0) = sum(0)   + 0 =   0
 *
 *
 * Working Like this,
 * sum(4)
 * sum(3) + 4
 * sum(2) + 3 + 4
 * sum(1) + 2 + 3 + 4
 * sum(0) + 1 + 2 + 3 + 4 = 10
 *
 */

/*
 * Title: Why Recursion not useful for big values
 * Description: As, Recursion can't handle big values. Because, there is a call-stack in our browser runtime environment. and jokhon ei amra call-stack e recursion work korte jai tokhon call-stack Last-in-First-Out evabe function guloke call korte thake.. jar fole 'Range Error' dei ar Maximum Call size exceeded er kotha bole..
 *
 * Jodi Loop kore same kaaj kori, taholeo  kaaj korbe tobe tate execution time onek beshi nibe..
 *
 * That's why, amra cpu ke use kore kaaj korte pari.. For example, amra Differentiation er Induction er formula khataite pari.. => sum(n) = (n*(n+1))/2
 * sum(4) = (4*(4+1))/2 = 20/2 = 10
 *
 */

const number = 10;
const result = (number * (number + 1)) / 2;
console.log(result);
