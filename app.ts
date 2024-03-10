function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === "number" && input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input1.toString();
  }
}

console.log(combine(5, 6));
