function root(a: number, b: number, c: number) {
    let array: number[] = [];
    let res: number = 0;
    res = b * b - 4 * (a * c)
    if (res < 0) {
        return array
    }
    else if (res == 0) {
        let rootRes: number = 0
        rootRes = (-b / 2 * a)

        array.push(rootRes)
        return array
    }
    else if (res > 0) {
        let rootRes1: number = 0
        let rootRes2: number = 0
        rootRes1 = (-b - (Math.sqrt(res) / 2 * a))
        rootRes2 = (-b + (Math.sqrt(res) / 2 * a))
        array.push(rootRes1, rootRes2)
        return array
    }
}

console.log(root(199, 606, 123))