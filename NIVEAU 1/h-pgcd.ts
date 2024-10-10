function pgcd(a: number, b: number): number {
    let res: number = 0
    if (a < b) {
        for (let i = a; i > 0; i--) {
            if (a % i == 0 && b % i == 0) {
                res = i;
                return res;
            }
        }
    } else {
        for (let i = b; i > 0; i--) {
            if (a % i == 0 && b % i == 0) {
                res = i;
                return res;
            }
        }
    }

    return res;
}
console.log(pgcd(36, 60))