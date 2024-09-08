function countPrimeNumbers() {
    let primes = 0;

    for (let counter = 2; counter <= 100; counter = counter + 1) {
        let isprime = true;
        var limit = Math.round(Math.sqrt(counter));
        for (let mod = 2; mod <= limit; mod++) {
            if (counter % mod == 0) {
                isprime = false;
                break;
            }
        }

        if (isprime) {
            primes = primes + 1;
        }
    }

    return primes;
}

let start = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let finish = performance.now();
console.log(
    "Execution time of calculating prime numbers 100 times was " +
    (finish - start) +
    " milliseconds."
);