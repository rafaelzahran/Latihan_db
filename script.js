let nama = "rafael";
const umur = 20;
let teks = "Hello";     // String
let angka = 10;         // Number
let aktif = true;       // Boolean
let kosong = null;
let belum;

let mahasiswa = {
    nama: "Rafael",
    umur: 20
};

let nilai = [80, 90, 100];

console.log("Hello");
alert("Halo");

function sapa(nama) {
    return "Halo " + nama;
}

console.log(sapa("Rafael"));

nilai = 80;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
const judul = document.querySelector("h1");    // Ambil tag
const tombol = document.querySelector("#btn"); // Ambil ID
const item = document.querySelector(".menu");  // Ambil Class

judul.innerHTML = "<strong>Judul Baru</strong>"; // Render sebagai HTML
judul.textContent = "Judul Baru";              // Render sebagai teks biasa
judul.style.color = "red";           // Mengubah warna teks
judul.style.backgroundColor = "blue"; // Menggunakan camelCase
judul.style.display = "none";        // Menyembunyikan elemen
