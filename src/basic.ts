const num1 = document.querySelector(".num1")! as HTMLInputElement;
const num2 = document.querySelector(".num2")! as HTMLInputElement;
const addButton = document.querySelector(".add")!;
const resultStatus = true;
const resultPhrase = "The result is:";

const sum = (
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) => {
  if (showResult) {
    console.log(`${phrase} ${num1 + num2}`);
  }
  return num1 + num2;
};

addButton.addEventListener("click", () => {
  sum(+num1.value, +num2.value, resultStatus, resultPhrase);
});
