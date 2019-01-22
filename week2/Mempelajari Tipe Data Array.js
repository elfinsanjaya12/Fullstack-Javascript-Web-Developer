// var animalsArray = ["lion", "horse"];
// animalsArray.push("duck"); // menambahkan 1 nilai ke array bagian paling belakang
// console.log(animalsArray); // ["lion", "horse", "duck"]
// animalsArray.pop(); // menghapus 1 nilai array terbelakang
// console.log(animalsArray); // ["lion", "horse"]
// animalsArray.unshift("dog");
// console.log(animalsArray); // ["dog", "lion", "horse"]
// animalsArray.shift();
// console.log(animalsArray);  // ["lion", "horse"]
// animalsArray.sort();
// console.log(animalsArray);  // ["horse", "lion"]
// console.log(animalsArray.join(" and ")); // "horse and lion"

var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]