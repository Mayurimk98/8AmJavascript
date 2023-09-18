
// //javascript

// //mayuri
// console.log("mayuri")

// let a1=10
// a1=20 //update
// console.log(a1) //20

// const x=20
// //x=35 //error
// const x1=30
// console.log(x) //20
// console.log(x1)  //30


// //operator ==> arithmatic, comparision, logical
// //function ==> 

// //function without para and without return type
// //function with para and without return type
// //function with para and with return type
// function student(){
//     console.log('Hello')
// }
// student()


//conditional statement

//if 
//if -else
//if -else if -else
//switch case

//need ==> single input   ==>multiple  outcome 
//condition ==> fullfill==> 1 output // not fullfile ==> 1 output


//if 
//synatx

// if(condition){
//     //statemenet
// }

if (1 == 1) {
    console.log("hello")
}
//hello

if (1 == 2) {
    console.log("hello")
}
//no output

if (10 > 2) {
    console.log("10 is greater")
}
else {
    console.log("bye")
}


let age = 30
if (age > 18) {
    console.log("you can drive")
}
else {
    console.log("you cant drive")
}


//program 1

//ticket
//1- 5==> 10 % discount
//6-10 ==> 20 % discount
//>10 ==> 30 % discount


//&& ==> multiplication
// true && true ==> true
// true && false==> false
// false&& true==> false
// fakse && false ==> false

//|| ==> addition


// let ticket = 6
// if (ticket > 0 && ticket <= 5) { //6>0 && 6<=5  true && false ==> false
//     console.log("10 % discount")
// }
// if (ticket > 5 && ticket <= 10) { //6>5 6<=10 true&& true ==> true
//     console.log("20 % discount")  //==> execute
// }
// if (ticket > 10) { //6>10 ==> false
//     console.log("30 % discount")
// }


// 10 sec ==> 30 sec


// let ticket = 6
// if (ticket > 0 && ticket <= 5) { //6>0 && 6<=5  true && false ==> false
//     console.log("10 % discount")
// }
// else if (ticket > 5 && ticket <= 10) { //6>5 6<=10 true&& true ==> true
//     console.log("20 % discount")  //==> execute
// }
// else if (ticket > 10) { 
//     console.log("30 % discount")
// }
//20 sec


// let ticket = 60
// if (ticket > 0 && ticket <= 5) { //6>0 && 6<=5  true && false ==> false
//     console.log("10 % discount")
// }
// else if (ticket > 5 && ticket <= 10) { //6>5 6<=10 true&& true ==> true
//     console.log("20 % discount")  //==> execute
// }
// else if (ticket > 100) { 
//     console.log("30 % discount")
// }
// else{
//     console.log("invalid input")
// }


// let score =100
// if(score>90){
//     console.log("best player")
// }
// if(score>70){
//     console.log("better player")
// }
// if(score>50){
//     console.log("good player")
// }

let score =100
if(score>90){
    console.log("best player")
}
else if(score>70){
    console.log("better player")
}
else if(score>50){
    console.log("good player")
}