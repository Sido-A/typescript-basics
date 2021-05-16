let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Sido";

if (typeof userInput === "string") {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError("Error occurred", 400);
