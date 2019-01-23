/*
    Logic Challenge - Konversi Menit

    Problem
    Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

function konversiMenit(menit){
    var jam = menit / 60;
    var detik = menit % 60;
    if(detik < 9){
        return Math.floor(jam) + ':0' + detik;
    } else {
        return Math.floor(jam) + ':' + detik; 
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00