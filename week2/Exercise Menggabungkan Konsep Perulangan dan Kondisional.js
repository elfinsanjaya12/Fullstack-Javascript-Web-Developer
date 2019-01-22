var nama = 'Zero';
var peran = 'Penyihir';

let tahunLahir =  1995;
let umur = 2019 - tahunLahir;
let playerHealth = tahunLahir * Math.random()
console.log(playerHealth)
let mosterHealth = tahunLahir * Math.random()
console.log(mosterHealth)
let kodeMoster   = Math.floor(Math.pow(100, Math.random()))
console.log(kodeMoster)

if(nama === ''){
    peran = 'Kacung'
    console.log(peran)
}
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

for(var i = 1; i <= tahunLahir; i++){
    if(i % umur === 0){
        console.log(peran + ' ' + nama + ' menyerang monster!')
        mosterHealth -= umur
    }
    if(i % kodeMoster === 0){
        console.log('monster menyerang ' + peran + ' ' + nama + '!')
        playerHealth -= kodeMoster
    }
    if(i % umur === 0 && i % kodeMoster === 0){
        console.log('Health keduanya bertambah')
        playerHealth += kodeMoster
        mosterHealth += umur
    }
    if(playerHealth > mosterHealth){
        console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
    } else {
        console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
    }
}