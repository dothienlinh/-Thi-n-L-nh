const number: number = 5;

// Function 1
const sum_to_n_a = (n: number): number => {
  let result: number = 0;

  for (let i = 0; i <= n; i++) result += i;

  return result;
};

// Function 2
const sum_to_n_b = (n: number): number => {
  if (n <= 0) return n;

  return n + sum_to_n_b(--n);
};

// Function 3
const sum_to_n_c = (n: number): number => {
  return (n * (n + 1)) / 2;
};

console.log(sum_to_n_a(number));
console.log(sum_to_n_b(number));
console.log(sum_to_n_c(number));
