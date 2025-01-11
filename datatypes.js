"use strict";
//type programming language
//string
let lname;
lname = "SANTOSH";
let newname = lname.toLowerCase();
console.log(newname);
//number 
let age = 20;
let age1 = 10;
age = 60;
let dob = "25.90";
//aprse float returns a float
let result = parseFloat(dob);
// age="sai"
//boolean
let bool = true; //its not definned when declared to false -- this is due to strict = true in the .json
console.log(bool); // the bool is not beeing asigned
//array
let emplist;
let deplist;
emplist = ["sai", "chethan", "karim"];
let numlist;
numlist = [1, 2, 3, 4, 5];
let res = numlist.filter((num) => num > 2);
let fres = emplist.find((emp) => emp === "santosh");
console.log(fres);
//using the reduce for accumulation
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* blue */;
//tuples
//use tuples to swap two numbers 
let swapnums;
function swapnumbers(num1, num2) {
    return [num2, num1];
}
swapnums = swapnumbers(10, 20);
swapnums[0];
swapnums[1];
//tuples can be helpful at -- incase function return multiple values
let department;
department = "IT";
department = 10;
//try to avoid any -- in the config noIMplicit any true which will not let you use any by default
function addnum(num1, num2) {
    return num1 + num2;
}
let data;
//even if not defined then it will take the type of any
//void 
//never 
//before that we will go through functions 
