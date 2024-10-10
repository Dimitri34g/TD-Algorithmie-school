function is_leap(year: number): boolean {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        return true
    }
    return false
}

console.log(is_leap(1900))