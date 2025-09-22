const anggotaPanahan = [
  { nim: "2202303001", nama: "Adinda", angkatan: 2022, jabatan: "anggota" },
  { nim: "2102303015", nama: "Citra Lestari", angkatan: 2021, jabatan: "anggota" },
  { nim: "2202303007", nama: "Dewi", angkatan: 2023, jabatan: "pengurus" },
  { nim: "2202303023", nama: "Sean", angkatan: 2023, jabatan: "anggota" },
  { nim: "2502303045", nama: "Fajar Nugroho", angkatan: 2025, jabatan: "anggota" },
  { nim: "2302303011", nama: "Wulandari", angkatan: 2023, jabatan: "pengurus" },
  { nim: "2202303030", nama: "Michael", angkatan: 2022, jabatan: "pengurus" },
  { nim: "2002303002", nama: "Indi", angkatan: 2021, jabatan: "anggota" },
  { nim: "2302303019", nama: "Subianto", angkatan: 2023, jabatan: "anggota" },
  { nim: "2402303018", nama: "Kartika Sari", angkatan: 2025, jabatan: "pengurus" },
  { nim: "2402303049", nama: "Surya Mulyono", angkatan: 2025, jabatan: "pengurus" },
  { nim: "2402303031", nama: "Ronisah", angkatan: 2025, jabatan: "pengurus" },
];

console.log("\n 1. map(): Mengubah nama menjadi huruf besar");
const namaHurufBesar = anggotaPanahan.map(anggota => anggota.nama.toUpperCase());
console.log(namaHurufBesar);

console.log("\n 2. filter(): Nama dengan panjang lebih dari 5 huruf");
const namaPanjang = anggotaPanahan.filter(anggota => anggota.nama.length > 5);
console.log(namaPanjang);

console.log("\n 2a. filter(): Daftar semua pengurus");
const listPengurus = anggotaPanahan.filter(anggota => anggota.jabatan === "pengurus");
console.log(listPengurus);

console.log("\n 3. reduce(): Menjumlahkan semua nama");
const totalPanjang = anggotaPanahan.reduce((total, anggota) => total + anggota.nama.length, 0);
console.log("Total panjang semua nama = ", totalPanjang);

console.log("\n 4. find(): Cari nama tertentu");
const cariNama = anggotaPanahan.find(anggota => anggota.nama.startsWith('S'));
console.log(cariNama);

console.log("\n 4a. find(): Cari anggota yang merupakan pengurus");
const cariPengurus = anggotaPanahan.find(anggota => anggota.jabatan === "pengurus");
console.log(cariPengurus);

console.log("\n 5. some(): Cek apakah ada anggota angkatan 2025");
const cari2025 = anggotaPanahan.some(anggota => anggota.angkatan === 2025);
console.log(`Apakah ada anggota dari angkatan 2025? ${cari2025}`);

console.log("\n 5a. some(): Cek apakah ada anggota angkatan 2019");
const cari2019 = anggotaPanahan.some(anggota => anggota.angkatan === 2019);
console.log(`Apakah ada anggota dari angkatan 2019? ${cari2019}`);

console.log("\n 6. every(): Cek apakah semua nama lebih dari 3 huruf");
const namaValid = anggotaPanahan.every(anggota => anggota.nama.length > 3);
console.log(`Apakah semua nama anggota lebih dari 3 huruf? ${namaValid}`);