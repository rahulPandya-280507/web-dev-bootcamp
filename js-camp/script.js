// variables
// let name = "Rahul";
// let age = 19;
// let city = "Pune";
// let isStudent = true;
// let remarks;
// let feedback = null;

// template strings and basic printing statements
// console.log(`${name} lives in ${city}, and is ${age} years old`); //template literal string
// console.log(`Is ${name} a student? [${isStudent}]`);

// the type of the variables listed above
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof city);
// console.log(typeof isStudent);
// console.log(typeof remarks);
// console.log(typeof feedback);

// the if-else statements
// let marks = 78;
// if(marks>80) {
//     console.log("A");
// } else if(marks>70) {
//     console.log("B");
// } else {
//     console.log("C");
// }

// the switch-case statements
// let day = "monday";
// switch(day) {
//     case "monday":
//         console.log("start of the week");
//         break;
//     case "friday":
//         console.log("Almost weekend");
//         break;
// }

// the for loop
// for(let i = 0; i<3; i++) {
//     console.log(i);
// }

// // the while loop
// let count = 0;
// while(count<3) {
//     console.log(count);
//     count++;
// }

// print even numbers from 0 to 20
// for(let i = 0; i<=20; i+=2) {
//     console.log(i);
// }

// let array = ["apple","banana","cherry"];
// array.push("Mango")
// array.push("Peach")
// array.pop();

// for(let i = 0; i<array.length; i++) {
//     console.log(array[i]);
// }

// objects
// let student = {
//     name:"Rahul",
//     city:"Pune",
//     marks:80
// };

// console.log(student);
// console.log(student.name)
// student.marks = 90
// console.log(student.marks)

// forin loop
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`); 
// }

// functions
// function display(name) {
//     console.log(name);
// }

// // arrow functions
// const display_arrow = (name)=>{
//     console.log(name);
// }

// display("Rahul");
// display_arrow("Rahul");

// function add(a,b) {
//     console.log(a+b);
// }

// const add_arr = (a,b) => {
//     console.log(a+b);
// }

// add(2,5);
// add_arr(3,5);

// scope
// let globalmsg = "I am global";
// const scope = () => {
//     let localmsg = "I am local";
//     console.log(localmsg);
//     console.log(globalmsg);
// }
// scope();
// console.log(localmsg);

// DOM 
// const p1 = document.getElementById("para");
// console.log(p1);
// p1.textContent = "Bye";
// p1.style.color = "red";

const btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
    console.log(event.target.name);
});
