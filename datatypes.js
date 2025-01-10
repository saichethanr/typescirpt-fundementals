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
