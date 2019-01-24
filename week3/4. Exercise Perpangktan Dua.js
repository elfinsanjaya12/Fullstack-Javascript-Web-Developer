/* 
    Logic Challenge - Perpangkatan Dua
    Problem
    Diberikan sebuah function perpangkatanDua(angka) yang menerima satu parameter berupa angka. Function akan me-return n jika angka tersebut merupakan hasil dari dua pangkat n. jika tidak, return -1. Contoh, jika angka adalah 16, dan karena 2^4 adalah 16, maka function akan me-return 4. Contoh kedua, jika angka adalah 17, karena 17 bukan merupakan hasil perpangkatan angka 2, maka function akan me-return -1.
*/

// 1 * 2 = 2
// 2 * 2 = 4
// 4 * 2 = 8
// 8 * 2 = 16
// 16 * 2 = 32
// 32 * 2 = 64

function perpangkatanDua(angka){
    var count = 0;

    while (angka >= 2) {
        if (angka % 2 === 0) {
            angka = angka / 2;
            count++;
        } else {
            return -1;
        }
    }
    return count;
}
// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0