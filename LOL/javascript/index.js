// let students = [
//     {
//         name: "Darshan Sayami",
//         age: "null",
//         gender: "Male",
//     },

//     {
//         name: "Dipsan Rai",
//         age: "null",
//         gender: "Male",
//     },

//     {
//       name: "Krizan Shrestha",
//       age : "16",
//       gender: "NONE",
//       class: "10",
//     },
    
//     {
//         name: "Kritey Shrestha",
//         age : "16",
//         gender: "NONE",
//         class: "10",
//       },
// ];

// console.log(students);


function multiply(){

    let a = document.getElementById("num").value;

    for (let i = 1; i <=20; i++ ) {

        document.getElementById("table").innerHTML += a + "x" + i + "=" + a * i + "<br>";
    }

}