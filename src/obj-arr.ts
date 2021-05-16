enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}
// const personOne: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: any;
// } = {
//   name: "Sido",
//   age: 27,
//   hobbies: ["coding", "anime"],
//   role: Role.ADMIN,
// };

let favouriteActivities: string[];
favouriteActivities = ["String"];

// for (const hobby of personOne.hobbies) {
//   console.log(hobby);
// }

const personTwo = {
  name: "Bib",
  age: 22,
  hobbies: ["music", "memes"],
  role: Role.READ_ONLY,
};

console.log(personTwo.role);
