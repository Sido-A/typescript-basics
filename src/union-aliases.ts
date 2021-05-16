type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combineAges = combine(20, 30, "as-number");
console.log(combineAges);

const combineStringAges = combine("20", "30", "as-text");
console.log(combineStringAges);

const combineNames = combine("Sido", "Bib", "as-text");
console.log(combineNames);
