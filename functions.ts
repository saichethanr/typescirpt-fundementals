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
