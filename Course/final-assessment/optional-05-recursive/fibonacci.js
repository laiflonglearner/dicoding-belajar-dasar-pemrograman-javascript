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

    The normal fibonacci function will result in: 
    [0, 1, 1, 2, 3, 5] for n = 5, meanwhile
    The recursive approach builds the Fibonacci sequence by appending the next number based on the last two numbers in the sequence.
    So the result is:
    [0]
    [0, 1]
    [0, 1, 1]
    [0, 1, 1, 2]
    [0, 1, 1, 2, 3]
    [0, 1, 1, 2, 3, 5]
    So the challenge was to use recursion to build the Fibonacci sequence up to n,
    while the normal fibonacci function simply returns the Fibonacci number at position n.
    This solution is indeed elegant but it is not the most efficient way to calculate Fibonacci numbers,
    especially for larger n, as it builds the entire sequence up to n.
*/

// Jangan hapus kode di bawah ini!
export default fibonacci;
