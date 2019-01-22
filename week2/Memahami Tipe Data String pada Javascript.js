// length menghitung panjang string dimulai dari 1
var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
console.log(name.length); // 42

// .charAt([indeks]) Mengembalikan karakter pada indeks yang diinginkan
console.log('i am a string'.charAt(3)); // 'm'

// .concat([string]) Menggabungkan beberapa string dan mengembalikannya menjadi string baru.

var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

// .indexOf([string/karakter]) Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.

var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1

// .match([regular-expressions])Mencari string yang memenuhi syarat pada suatu regular expression dan menemukan string yang ditemukan ke dalam sebuah array.
var wordTest = 'Can you can a can as a canner can can a can?';
var foundCan = wordTest.match(/can/g);
console.log(foundCan); //["can", "can", "can", "can", "can", "can"]

// .replace([string/regex], [string untuk ditukar]) Mencari string tertentu atau regular expression pada parameter pertama di dalam suatu string dan mengembalikan string baru dimana isinya adalah parameter pertama (bila ditemukan) sudah ditukar dengan parameter kedua. Bila menggunakan regex(regular expression), semua string yang ditemukan akan ditukar. Bila menggunakan string saja, hanya yang pertama ditemukan yang akan ditukar.
var rockYou    = 'dung dung ces, dung dung ces';
var newRockYou = rockYou.replace(/ces/g, 'pret');
console.log(newRockYou); // dung dung pret, dung dung pret
var rockYou    = newRockYou.replace('dung/g', 'dum');
console.log(rockYou); // dum dung pret, dung dung pret

// .slice([indeks awal], [indeks akhir (optional)])Mengembalikan potongan string mulai dari indeks pada parameter pertama sampai dengan indeks pada parameter kedua. Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
var car1 = 'Lykan Hypersport';
var car2 = car1.slice(0, 4);
console.log(car2); // Lyka

// .split([karakter pemisah], [limit (opsional)])Mengembalikan array dari potongan-potongan string yang dipisah dengan karakter separator yang sudah ditentukan pada parameter.
var story    = 'Once_upon_a_time';
var splitted = story.split('_');
console.log(splitted); // ['Once', 'upon', 'a', 'time']

// .substr([indeks awal], [panjang yang diinginkan]) Mengembalikan potongan string mulai dari indeks pada parameter pertama dengan karakter sebanyak yang ditentukan pada array kedua. Bila parameter kedua tidak ditentukan, akan diambil sampai akhir string.
var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
var subs = name.substr(1,10);
console.log(subs); // vuvwevwevw'

// .substring([indeks awal], [indeks akhir (optional)]) Mengembalikan potongan string mulai dari indeks pada parameter pertama sampai dengan indeks pada parameter kedua. Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.
var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport


// .toUpperCase() Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.
var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU


// .toLowerCase()Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil
var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(lower); // this letter is for you

// .trim() Mengembalikan string baru yang sudah dihapus karakter whitespace pada awal dan akhir string tersebut.
var username    = ' administrator ';
var newUsername = username.trim(); // 'newUsername = 'administrator
console.log(newUsername)

// .toString() Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.
var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'

// String([angka/array])Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan String dari parameter yang diberikan.
var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];
var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'

// Number([String])Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN ***(Not a Number)***.
var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN

// parseInt([String]) dan parseFloat([String]) Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.

var int  = '89';
var real = '56.7';

var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56

var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7