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



//enum -once code is compled we dont need enums
const enum color {
    red,
    green,
    blue
}

let c : color = color.blue;


//tuples
