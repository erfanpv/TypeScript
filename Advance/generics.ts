//Generics
function getSalary<T>(name: T): T {
  return name;
}

getSalary<string>("30k");
getSalary<number>(30_000);

//Types in generics
type UserDetails = {
  name: string;
  age: number;
};

type AdminDetails = UserDetails & {
  role: string;
};

const userDetails: UserDetails = {
  name: "Erfan",
  age: 22,
};
const adminDetails: AdminDetails = {
  name: "Erfan",
  age: 22,
  role: "Admin",
};

function getDetails<T>(details: T): T {
  return details;
}

const userValue = getDetails<UserDetails>(userDetails);
const adminValue = getDetails<AdminDetails>(adminDetails);

//Interface in generics
interface UserDetailsNew {
  name: string;
  age: number;
}

interface AdminDetailsNew extends UserDetailsNew {
  role: string;
}

const userDetailsNew: UserDetailsNew = {
  name: "Hashir",
  age: 20,
};

const adminDetailsNew: AdminDetails = {
  name: "Afnan",
  age: 19,
  role: "new Admin",
};

function getData<T>(data: T): T {
  return data;
}

const userData = getData<UserDetailsNew>(userDetailsNew);
const adminData = getData<AdminDetailsNew>(adminDetails);
