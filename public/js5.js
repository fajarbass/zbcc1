// Direction : For each value inside the array, get the next smallest prime number value greater than the input number, if input number is already prime return that input
// For example: Input: 4, Expected: 5, Input: 14, Expected: 17, Input: 2, Expected: 2
// Expected: [2, 5, 19, 23, 37, 89]
const number = [2, 4, 18, 20, 35, 84];
const answer = [];

function result(num) {
    // Your Code Here

    const primes = num => {
        let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2);
        sqrt = Math.floor(Math.sqrt(num));
        ntsqrt = Array.from({ length: sqrt - 1 }).map((x, i) => i + 2);
        ntsqrt.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
        return arr;
      };
    
    const primeNumber = primes(100);
    // const primeNumber = [ 2, 3,  5,  7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];

    number.forEach(n =>
    {
       primeNumber.find(nmbr => nmbr === n) ? answer.push(n) : answer.push(primeNumber.find(nmbr => nmbr > n));
    });

    return answer;

  
}


console.log(result(answer));