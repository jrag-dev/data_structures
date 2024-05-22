
function fact(n: number): number {
  if (n === 0 || n === 1) {
    return 1
  }
  else {
    return n * fact(n - 1)
  }
}

const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]

items.forEach(item => {
  console.log(`Factorial(${item}) = ${fact(item)}`)
})
