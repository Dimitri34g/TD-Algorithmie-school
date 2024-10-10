function delta(a: number, b: number, c: number): number {
    let res: number = 0;
    res = b * b - 4 * (a * c)
    return res
}

console.log(delta(199, 606, 123))