// var input = "hello world!"
// let balik = ""
// for(var i = 0; i < input.length; i++){
//     balik = input[i] + balik;
// }

// console.log(balik);

function balikString(){
    var input = "hello world!"
    let balik = ""
    for(var i = 0; i < input.length; i++){
        balik = input[i] + balik;
    }
    return balik;
}

console.log(balikString());