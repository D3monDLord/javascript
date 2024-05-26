function addition() {
    let a = document.getElementById("num_one").value;

    let b = document.getElementById("num_two").value;

    let c = parseInt(a) + parseInt(b)

    document.getElementById("result").innerHTML = c;
}


// let temperature = prompt("Enter temperature");

// if (temperture != 10) {
//     console.log("cold");
// } else {
//     console.log("hot");
// }


let temperature = prompt("Enter temperture");

if(tempera ture<10){
    console.log("cold")
}

else if(temperature >10 && temperature <30 ){
    console.log("normal")
}

else{
    console.log("hot")
}