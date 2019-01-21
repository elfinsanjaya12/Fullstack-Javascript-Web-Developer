// Math.abs(x)
// Mengembalikan angka absolut
var absolut = Math.abs(-21,5)
console.log(absolut)

// Math.ceil(x)
// Mengembalikan angka integer dari pembulatan keatas suatu angka
var angka2 = Math.ceil(1.99); // angka2 = 2
var angka1 = Math.ceil(0.1);  // angka1 = 1
var angka0 = Math.ceil(-0.1); // angka0 = 0

console.log(angka1)
console.log(angka0)
console.log(angka2)

// Math.floor(x)
// Mengembalikan angka integer dari pembulatan kebawah suatu angka
var angka3 = Math.floor(3.99)
var angka4 = Math.floor(4.01)
var angka5 = Math.floor(-0.1)

console.log(angka3)
console.log(angka4)
console.log(angka5)

var roundUp = Math.round(3.5) //round up
console.log(roundUp)
var roundDown = Math.round(3.49)
console.log(roundDown)

var truncated = Math.trunc(Math.PI) // truncated = 3
console.log(truncated)

// Math.max(angka1,angka2,[...],angkaN)
// Mengembalikan angka terbesar dari beberapa angka (bukan array).

var maxTwo   = Math.max(1,2);   // maxTwo   = 2
console.log(maxTwo)
var maxThree = Math.max(1,2,3); // maxThree = 3
console.log(maxThree)

// Math.min(angka1,angka2,[...],angkaN)
// Mengembalikan angka terkecil dari beberapa angka (bukan array).

var minTwo   = Math.min(4,5);      // maxTwo   = 4
console.log(minTwo)
var minThree = Math.min(-1,-2,-3); // maxThree = -3
console.log(maxThree)

// Math.pow(x, y)
// Mengembalikan hasil dari x pangkat y

var pangkat2 = Math.pow(3,2); // pangkat2 = 9
console.log(pangkat2)
var pangkat3 = Math.pow(2,3); // pangkat3 = 8
console.log(pangkat3)

// Math.random()
// Mengembalikan suatu angka acak X, dimana 0 < X < 1

var random = Math.random(); // random = X, dimana 0 < X < 1
console.log(random)