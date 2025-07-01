/**
 * TODO:
 * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
 * Dengan ketentuan sebagai berikut:
 * 1. Jika input bukan number, bangkitkan (throw) error.
 * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
 * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
 * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
 * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
 * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
 */

function categorizeNumber(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid input: must be a number");
  }

  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  if (input === 0) return "Nol";
  if (input < 0) return "Negatif";
  if (isPrime(input)) return "Prima";
  if (input % 2 == 0) return "Genap";
  return "Ganjil";
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
}
