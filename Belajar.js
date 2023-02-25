// // Export Import Commonjs Module
// // Pastikan di file package.json typenya harus commonjs kalau module akan error
// // Cara Ke 1

// function tambah(a, b) {
//     return a + b;
// }

// function kurang(y, z) {
//     return y - z;
// }

// module.exports = {tambah, kurang};

// // Cara Ke 2

// exports.tambah = function(a, b) {
//     return a + b;
// }

// exports.kurang = function(y, z) {
//     return y - z;
// }



// // Export Import ECMAScipt Module
// // Pastikan di file package.json typenya harus module kalau commonsjs akan error
// // Cara Ke 1

// function myTambah(a, b) {
//     return a + b;
// }

// function myKurang(y, z) {
//     return y - z;
// }

// export {myTambah, myKurang};

// // Cara Ke 2

// export function myTambah(a, b) {
//     return a + b;
// }

// export function myKurang(y, z) {
//     return y - z;
// }



// // Contoh export pakai default

// export default function myKali(i, j) {
//     return i * j;
// }


