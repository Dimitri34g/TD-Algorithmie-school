function is_perfect(n: number): boolean {
    let res: number = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            res = i + res;
        }
    }
    return res === n;
}

console.log(is_perfect(28));
