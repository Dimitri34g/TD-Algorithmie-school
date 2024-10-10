function rectangle (n : number, m : number) : string {
    let star:string = '*';
    let resStar : string= '';
    for (let i = 0 ; i < m ; i++){
    resStar += star.repeat(n)+"\n";
    }
return resStar

}

console.log(rectangle(3,2))