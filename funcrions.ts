//functions

function getUserName(User: Details1) {
  return User.age;
}
type Details1 = {
  name: string;
  age: number;
  salary: number;
};
let UserDetails: Details1 = {
  name: "Erfan Admin",
  age: 20,
  salary: 14000,
};

getUserName(UserDetails);
