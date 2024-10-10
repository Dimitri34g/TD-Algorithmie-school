function beautiful_mult (n :number): string{
    let mult: string ='';
    for (let i = 0 ; i < 10; i++ ){
        mult+= `${n}*${i+1}= ${n*(i+1)}\n`
    }
    return mult
}

console.log(beautiful_mult(2))