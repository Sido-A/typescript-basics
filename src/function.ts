const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number) => {
  console.log("Result:" + num);
};

printResult(add(5, 5));

let combineValues: (a: number, b: number) => number;

combineValues = add;
printResult(combineValues(1, 1));

const minusHandler = (
  n1: number,
  n2: number,
  callback: (num: number) => void
) => {
  let result = n1 - n2;
  callback(result);
};

// minusHandler(900, 500, printResult);
minusHandler(88, 17, (result) => {
  console.log(result);
});
