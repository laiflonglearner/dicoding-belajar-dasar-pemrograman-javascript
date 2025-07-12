function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// n! = n * (n-1)!
// 5! = 5 * 4! = 5 * 24 = 120

// Jangan hapus kode di bawah ini!
export default factorial;
