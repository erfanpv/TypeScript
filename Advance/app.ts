//as const or Type casting
//it convert one type to another type
//it is read only  variable
let userName = "erfan" as const;

//it is not support beacause in the declaration time decalare a as const so it's only provide reassign the same value;
// userName = 'safvan'

// we can setup as string, as number and etc.

//keyof typeof
const StatusType = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
};

function getStatus(orderID: string, status: keyof typeof StatusType) {
  console.log(orderID, "==", StatusType[status]);
}

getStatus("12345", "COMPLETED");

//utility types
type User = {
  name: String;
  age: number;
};

const userDetails: Readonly<User> = {
  name: "erfan",
  age: 22,
};
//it is error because that is  read-only propertie
// userDetails.age = 30;

//partial
type User1 = {
  name: String;
  age: number;
};

//all keys are optional
const userDetails1: Partial<User1> = {};

//Required
type User2 = {
  name: String;
  age?: number;
};

const userDetails2: Required<User2> = {
  name: "erfan",
  age: 20,
};

//Pick
const userDetails3: Pick<User2, "name"> = {
  name: "erfan",
};

//Omit
type User3 = {
  name: String;
  age: number;
  salary: number;
};
const userDetails4: Omit<User3, "salary"> = {
  name: "erfan",
  age: 20,
};

//Exclude
type StatusTypeNew = "pending" | "completed" | "failed";
const checkStatus: Exclude<StatusTypeNew, "pending"> = "completed";

//Record
// type Food = {
//   KFC: string;
//   PIZZA: string;
//   CHICKEN: string;
// };

type Food = Record<string, string>;
const food: Food = {
  PIZZA: "soda",
  CHICKEN: "broiler",
};

//indexing
//another way of Record
type Food2 = {
  [index: string]: any;
};

const food2: Food2 = {
  PIZZA: "soda",
  CHICKEN: "broiler",
  obj: {
    name: "Abc",
  },
};

//unknown
let userName1: unknown = "abcdef";

userName1 as String;

//never
//it doesen't return anything
function throwError(message: string): never {
  throw new Error(message);
}

//void
//it doesen't return anything but it execute some code inside the functions.
function logMessage(message: string): void {
  console.log(message);
}

//null
let userData: string | null = null;

function getData() {
  if (userData) {
    return "User is found";
  } else {
    return "User does not found";
  }
}
