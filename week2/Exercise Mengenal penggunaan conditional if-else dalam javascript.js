//Contoh input 1
var nama = 'Mikael';
var peran = '';

//Contoh input 2
var nama = 'Nina';
var peran = 'Ksatria';

// //Contoh input 3
var nama = 'Danu';
var peran = 'Tabib';

// //Contoh input 4
var nama = 'Zero';
var peran = 'Penyihir';


if(peran === ''){
    console.log("Hai "+ nama + " Pilih peran untuk memulai game");
}else if (peran === 'Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Ksatria "+ nama + ", kamu dapat menyerang dengan senjatamu!")
}else if (peran === 'Tabib'){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}else if (peran === 'Penyihir'){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}