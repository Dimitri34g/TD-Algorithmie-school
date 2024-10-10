function int_pyramid(n: number): string {
    let line:string='';
    let res: string = '';
    for (let i = 0; i < n; i++){
        line+= (i+1)
        res+=line+'\n'
    }
        
    return res
}

console.log(int_pyramid(5))