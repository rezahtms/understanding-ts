// function addJs(n1, n2) {
//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return n1 + n2;
//   } else {
//     throw new Error("Incorrect input1");
//   }
// }

// console.log(addJs("2", 3));

function add(n1: number, n2: number, showResult: boolean, phase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 5;
const showResult = true;
const phase = "Result is ";
enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}
// const result = add(number1, number2, showResult);
// add(number1, number2, showResult, phase);
const person = {
  name: "max",
  age: 30,
  hobbies: ["sport", "cooking"],
  role: Role.ADMIN,
};

// console.log(person.name);
let favoriteActivities: string[];
favoriteActivities = ["sport", "musics"];
if (person.role === Role.ADMIN) {
  console.log("is admin: " + person.name);
}

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
