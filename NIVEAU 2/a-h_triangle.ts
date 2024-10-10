function h_triangle (num : number):string{
    let star:string = '*';
    let resStar : string= '';
    for (let i = 0 ; i < num ; i++){
    resStar += star.repeat(i+1)+"\n";
    }
return resStar
}

console.log(h_triangle(3))