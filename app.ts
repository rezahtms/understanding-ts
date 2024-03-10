// function addJs(n1, n2) {
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2;
//   } else {
//     throw new Error("Incorrect input1");
//   }
// }

// console.log(addJs("2", 3));

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 5;
const result = add(number1, number2);
console.log(result);
