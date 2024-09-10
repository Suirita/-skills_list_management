// Calculate the factorial of a number
function Factorial(x) {
  let y = 1;
  for (let i = 1; i <= x; i++) {
    y *= i
  }
  console.log(`${x} factorial is ${y}`)
}

Factorial(0)
