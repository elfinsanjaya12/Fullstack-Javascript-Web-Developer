/*
    Logic Challenge - X dan O

    Problem
    Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

function xo(str){
    var x = 0;
    var o = 0;       
    for(var i =0; i < str.length; i++){
        if(str[i] === 'x'){
            x++;
            // console.log(x);
        }else if(str[i] === 'o'){
            o++;
            // console.log(o);
        }
    }
    return x === o
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true


