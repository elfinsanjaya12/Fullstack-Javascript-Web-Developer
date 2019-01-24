/*
    Logic Challenge - Pasangan Angka Terbesar

    Problem
    Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

function pasanganTerbesar(angka){
    var stringNumber = angka.toString();
    //   console.log(stringNumber)
    var result = []
    for(var i = 0; i < stringNumber.length - 1; i++){
        //   console.log(stringNumber[i]);
        result.push(Number(stringNumber[i] + stringNumber[i+1]));
    }
    // console.log(result)
    for(var x = 0; x < result.length; x++){   
        var temp = result[0];
        // console.log(result[x]);
        for(var y = 1; y < result.length; y++){
            if(temp < result[y]){
                temp = result[y];
                // console.log(temp);
            }else {
                temp = temp;
            }
        }
        return temp
    }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99