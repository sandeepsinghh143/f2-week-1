/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log 
  arr.map(function (element) {
    if (element.marks > 50) {
      console.log(element);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (element) {
    if (element.marks > 50) {
      console.log(element);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id:4,name:"susan",age:"20",marks:45 });
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr=arr.filter(function(element){
    if(element.marks>50){
     return element;
    }
 })
 console.log(arr);
   console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let createdArray = [
    {id:5, name: "aman", age:"21", marks:90},
    {id:6, name: "mohit", age:"22", marks:75},
    {id:7, name: "ajay",  age:"25", marks:70}
  ];
  arr=arr.concat(createdArray);
  console.log(arr);
}
