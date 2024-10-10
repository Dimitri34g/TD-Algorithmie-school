function reverse_ints(n: number): string {
    let res: string = '';
    for (let i = n; i > 0; i--)
        res += i.toString();
    return res
}

console.log(reverse_ints(5))