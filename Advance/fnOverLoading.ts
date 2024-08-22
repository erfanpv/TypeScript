//It's not good way
function add(a: number | string, b: number | string): string | number {
  if (typeof a === "string" || typeof b === "string") {
    return a + "" + b;
  }
  return a + b;
}

add(10, 15);
add("2", "2");

//Function overloading
// Function overloading in TypeScript allows you to define multiple functions with the same name but different parameter types. This enables you to create more flexible and reusable functions that can handle various input types.


function addNum(a: number, b: number): number;
function addNum(a: string, b: string): string;
function addNum(a: string, b: number): string;
function addNum(a: any, b: any): any {
  return a + b;
}
addNum(10, 20);
addNum("10", "10");
addNum("10", 20);
// addNum([],[]) => This is error


//Generics is the best approach for the multiple type declaration in function parameters..
