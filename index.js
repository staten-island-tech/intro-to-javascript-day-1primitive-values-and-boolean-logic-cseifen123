
// //Formative Assessment 1
// let light= "Green";
// if(light === "Green"){
//     console.log("Go");
// } else if(light === "Yellow") {
//     console.log("Caution");
// } else if(light=== "Red"){
//     console.log("Stop");
// }else{
//     console.log("Oh no! Error");
// }


// //Formative Assessment 2
// let Kristy = "intolerant";
// let BaoBao = "tolerant";
// if(Kristy === "tolerant" && BaoBao === "intolerant"){
//     console.log("Get milk and almond milk.");
// } else if(Kristy === "intolerant" && BaoBao === "tolerant") {
//     console.log("Get milk and almond milk.");
// } else if(Kristy === "intolerant" && BaoBao === "intolerant") {
//     console.log("Get almond milk only.");
// }else if(Kristy === "tolerant" && BaoBao === "tolerant"){
//     console.log("Get milk only.");
// }


// //Cupcake Challenge
// let temperature = 71;
// if(temperature < 68){
//     console.log("It is too cold:(");
// }else if(temperature >= 68 && temperature <= 72){
//     console.log("It is perfect:)");
// }else if(temperature >= 73 && temperature <= 76){
//     console.log("It is warm!");
// }else if(temperature > 76){
//     console.log("It is too hot.");
// }




///////CLASS NOTES BELOW

///////////////strings
// console.log("Connect");
// let string="string";
// const edis ="Edis";
// let sentence = "Hello " + "Vicky";
// let sentence2 = " and also Angel";
// let combine = sentence + sentence2; 
// combine = `${sentence2}${sentence}`; //redifinging variable

// let student1 = "Sandra";
// let student2 = "Kelly";
// let courseName = "AP CSP";
// let teacherName = "Whalen";
// let longSentence = `${student1} and ${student2} will be taking ${courseName} with ${teacherName} next year`;

// "next year with" + 
// teacherName;
// const LongSentence = '${student1} and ${student2} are amazing adn will be taking ${courseName} with $teacherName}'; 
// let url = ${url}${movie}




/////////////////number of integers
// let year = 2020; //different than string "2020"
// let nextYear= 2021;
// let past = 2020/2;
// let farFuture = 2020 * 50; // javascript mathematical operators
// console.log(past, lastYear, farFuture);//console log differnet varibales if things srent working, do this a lot


////////////////////BooLeans
// let trueStatement = true;
// let falseStatement = false; 

/////////////////Null and Undefined
// let undefinedVar;
// // let Ron; //declared but not defined
// // console.log(Ron);

// console.log(nonExistent); //null never declared


////////////Boolean Logic
//let student = "Caroline";
//let age = 15;
// console.log(student === "Caroline");//true
// console.log(student === "caroline");//false
// console.log(student == "caroline");//false
//console.log(age === 15);
//console.log(age === "15"); //false dont need quotes because it is not a STRING
//console.log(age == "15");//true double equals is less strict

// let age = 16;
// let name = "dog"
// console.log(age < 17);
// console.log(age <= 17);
// console.log(age >= 17);
//console.log(age == 16 || age == 17); //true
//console.log(age == 16 && name == "dog"); //true
//console.log(age !== 16); //if age is not equal to 16



// console.log(age <= 15 );
// console.log(age <= 15 || age > 19);//true
// console.log(age <= 15 && age > 19);//false


///////////If statements
// let age = 19;
// if(age < 18){
//     console.log("You are a child");
// } else if(age >=18){
//     console.log("You are an adult");
// }

// let school= "";
// if(school === "Elementary"){
//     console.log("You are in k-5");
// } else if(school === "Middle") {
//     console.log("you are in 6,7 or 8th grade");
// } else{
//     console.log("you are in HS");
// }



///////////CLASS NOTES DAY 2


///////FUNCTIONS
//input output machines
// function test(){
//     console.log("TEST");
// }
// test(); //you have to call a function
// function cool (argument){
//     console.log(argument);
// }
// cool("nice"); //call argument adn pass parameter noce

// function add (x,y){
//     return x + y;
// }
// //console.log(add(2,7));
// let z = function add (x , y){
//     return x + y;
// }
// console.log(z(1, 11));
// function argument(name1, name2){ ///write one funtion and state it down there
//     console.log(name1, name2);
// }
// argument("val","eric");

// const add = function(x,y){
//     return x + y; //immediately ends the function
    
// };
// console.log(add(10,3));

// const name ="brian";
// name = "diego";//const doesnt let you redefine variable

// const hello = function(){
//     alert("hello");
// };

// // // hello();

// const bye = function(){
//     alert("bye");
// };

// const beatles = function(){
//     hello();
//     bye();
//     hello();
//     bye();
// };

// beatles(); // call bigger function so you dont have to kepp writing all those functions


/////////////////scope

//global scope
// function makeFunc(){
//     //function scope
//     const name = "sun";
//     console.log(name);
// }
// function ok (){
//     //function scope
//     const name = "moon";
//     console.log(name);
// }
// ok ();
// makeFunc();

// function makeFunc(){
//     //function scope
//     const name = "sun";
//     function displayName(name){
//         alert (name);
//     }
//     displayName(name);
// }
//putting things inside a function protects it
// const name = "mike" //calling function will call sarah---- global space
// function hello(){
//     const name = "Sarah";//typing that name wont don anything --- function scope
//     function displayName(){
//         console.log(name);//inner function can acces outer function but outer function cannot access inner variables
//        // alert(name)
//     }
//     return displayName;//returning the inner fucntion produces copy of it
// }
// const myFunc = hello();//closure
// myFunc();
// //hello();


////////arrays
// const names = ["Diego", "Frid", "Christian", "Valerie", "Haoran", "Brian" ,"Caroline"];

// // names.push("Caroline");
// // let newNames = names.unshift("Brian");
// names.forEach(name => console.log(name));//loops throgh every element in array
//always returned, this keyword is changed

// ///////////spread operators

// const numbers = {1,2,3};
// const add = function(x,y,z){
//     return x + y + z;
// };
// console.log(add(...numbers));

// const names = ["Diego", "Frid", "Christian", "Valerie", "Haoran" ];
// names.push("caroline");
// const extra = names.slice(-3);


///////////Challenge 1

const names = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa","Richard"];
const choose = names.filter(name => name.length < 5);

///////////Challenge 2

const students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa","Richard"];
console.log(students.includes('Junshen')); //false
 

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}
console.log(checkAvailability(students, 'Alan')); // true
console.log(checkAvailability(students, 'Savva')); // false