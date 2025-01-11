//type programming language

//string
let lname : string;
lname = "SANTOSH";
let newname : string = lname.toLowerCase();
console.log(newname);

//number 
let age = 20;
let age1 : number = 10;
age =60;
let dob : string = "25.90"
//aprse float returns a float
let result = parseFloat(dob);
// age="sai"

//boolean
let bool : boolean = true; //its not definned when declared to false -- this is due to strict = true in the .json
console.log(bool); // the bool is not beeing asigned

//array
let emplist : string[];
let deplist : Array<string>;
emplist = ["sai" ,"chethan" , "karim"]
let numlist : Array<number>;
numlist = [1,2,3,4,5]

let res = numlist.filter((num)=> num>2);

let fres = emplist.find((emp)=> emp==="santosh");
console.log(fres)

//using the reduce for accumulation
let sum = numlist.reduce((acc,num) => acc +num);
console.log(sum)



//enum -once code is compled we dont need enums  -- so define it as a const
const enum color {
    red,
    green,
    blue
}

let c : color = color.blue;


//tuples
//use tuples to swap two numbers 

let swapnums : [number,number];
function swapnumbers(num1:number,num2:number) : [number,number]{
    return [num2,num1];
}

swapnums = swapnumbers(10,20);
swapnums[0];
swapnums[1];

//tuples can be helpful at -- incase function return multiple values
let department : any;
department = "IT";
department = 10;
//try to avoid any -- in the config noIMplicit any true which will not let you use any by default

function addnum(num1 : number , num2 : number) : any {
    return num1 + num2;
}

let data;
//even if not defined then it will take the type of any

//void 
//never 


//before that we will go through functions 

