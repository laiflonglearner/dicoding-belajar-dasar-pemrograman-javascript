function fibonacci(n) {
  // Base cases: F(0) = [0], F(1) = [0, 1]
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];

  // Builds the sequence recursively
  function extendFibonacci(n, sequence = [0, 1]) {
    if (n < 2) return sequence;

    // Next Fibonacci number = sum of last two numbers
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2]; // F(n) = F(n-1) + F(n-2)
    sequence.push(next);

    // Continue building until n reaches 1
    return extendFibonacci(n - 1, sequence);
  }

  return extendFibonacci(n);
}

console.log(fibonacci(5)); // [0, 1, 1, 2, 3, 5]

/*
    For n = 5:
    fibonacci(5) calls extendFibonacci(5, [0, 1]).
    n = 5: Append 0+1=1 → [0, 1, 1], call extendFibonacci(4).
    n = 4: Append 1+1=2 → [0, 1, 1, 2], call extendFibonacci(3).
    n = 3: Append 1+2=3 → [0, 1, 1, 2, 3], call extendFibonacci(2).
    n = 2: Append 2+3=5 → [0, 1, 1, 2, 3, 5], call extendFibonacci(1).
    n = 1: Return [0, 1, 1, 2, 3, 5].
    For n = 0: Return [0] (base case in outer function).
    For n = 1: Return [0, 1] (base case in outer function).
*/

// Jangan hapus kode di bawah ini!
export default fibonacci;
