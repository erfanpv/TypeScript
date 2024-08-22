//Defining Types (Explicit Types)
let studetName: string = "Afnan";
let salary: Number = 50000;
let isActive: boolean = true;
let skills: String[] = ["JS", "CSS", "TS"];
let count: number[] = [1, 2, 3];
let emptyArray: [] = [];
let userDetails: { name: string; age: number; salary: number | string } = {
  name: "Ijas",
  age: 18,
  salary: 5000,
};

//Interface
// Interface does not allow inline type declaration.it's only allows object type declaration
interface Details {
  name: string;
  age: number;
  salary: number;
  getName: () => void;
}

let newUserDetails: Details = {
  name: "Erfan",
  age: 22,
  salary: 140000,
  getName() {
    console.log(this.name);
  },
};

//Type
// Type allows inline type declaration and object type declaration
type Detailsnew = {
  name: string;
  age: number;
  salary: number;
};

let AdminDetails: Detailsnew = {
  name: "Erfan Admin",
  age: 20,
  salary: 14000,
};
//Union/Optional
type DetailsOne = {
  name: string;
  age: number;
  salary?: number | string;
  getName?: () => void;
};

let user: DetailsOne = {
  name: "Erfan Admin",
  age: 20,
  salary: 14000,
};

let subject: (string | number | boolean)[] = [
  "JS",
  "TS",
  "CSS",
  10,
  20,
  30,
  true,
];
