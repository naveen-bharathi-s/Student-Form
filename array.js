// let a = [1,2,3,4,5,6,7,8,9,10]
// console.log("Even Numbers:")
// for(count=0;count<10;count++){
//     if(a[count]%2==0){
//         console.log("Its an Even number "+ a[count])
//     }
// }
// console.log("Odd Numbers:")
// for(count=0;count<10;count++){
//     if(a[count]%2==1){
//         console.log("Its an Odd number "+ a[count])
//     }
// }

// let guess = Math.floor(Math.random*10)+1
// let count = 0

//   while(true){

//     let userInput = prompt("guess a number 1 t0 10")
//     count++

//     if(guess==userInput){
//         alert("guessed number is rite" + "attempt:" + attempt)
//         break;
//     }
//     else if(guess < userInput){
//         alert("too high")
//     }
//     else{
//         alert("to low")
//     }

// }

// let a=[1,3,5,7,9]
// console.log(a.includes(7))


let person = [{
    name: "naveen",
    age: 25,
    place: "tamilnadu"
},
{
    name: "praveen",
    age: 27,
    place: "tamilnadu"
},
{
    name:"sugi",
    age:25,
    place:"tamilnadu"
},
{
    name:"balu",
    age:25,
    place:"tamilnadu"
}  
]
// delete person.age
// console.log(person[3])

// for (let key in person) {
//     console.log(person[key])
// }

for(let count=0;count<person.length;count++){
    console.log(person[count].name)
}
