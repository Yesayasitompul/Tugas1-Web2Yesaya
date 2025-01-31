console.log("Soal 7 - Pattern");
console.log("");

const n: number = 5;

// Pattern segitiga
for (let i = 1; i <= n; i++) {
  let baris: string = "";

  // Spasi
  for (let j = 1; j <= n - i; j++) {
    baris += " ";
  }

  // Bintang
  for (let k = 1; k <= i; k++) {
    baris += "* ";
  }

  console.log(baris);
}

