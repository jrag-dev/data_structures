
function fibonacci(n: number): number {
  if (n === 0 || n === 1) {
    return n
  }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(item => {
  console.log(`Fibonacci(${item}) = ${fibonacci(item)}`)
})
