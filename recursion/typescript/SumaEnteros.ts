function sumaEnteros(n: number): number {
  if (n == 1) {
    return 1
  }
  else {
    return n + sumaEnteros(n - 1)
  }
}

const array: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(item => {
  console.log(`S(${item}) = ${sumaEnteros(item)}`)
})
