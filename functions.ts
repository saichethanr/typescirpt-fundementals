//type 1
function add(a : number ,b :number) : number{
    return a+b;
}

console.log(add(4,5));

//type 2
const  sub = (num1 : number , num2 : number) : number => num1 -num2 ;
console.log(sub(5,3));

//type 3
const mul = function mul(a : number ,b :number) : number{
    return a*b;
};
console.log(mul(5,6));


//type 4
//optional parameter
// function div(a : number ,b :number , c ? : number) : number{
//     return c? a/b/c
// }
// console.log(div(3,4));

//type 4
//default value parameter
// function div(a : number ,b :number , c=10) : number{
//     return c? a/b/c
// };
// console.log(div(3,4));


//rest parameter 
function add2(num1:number,num2:number , ...num3 : number[]) : number{
    return num1+num2+num3.reduce((a,b) => a+b ,0);
}
let numbers = [1,2,3,4,5,6]
console.log(add2(4,5,...numbers));