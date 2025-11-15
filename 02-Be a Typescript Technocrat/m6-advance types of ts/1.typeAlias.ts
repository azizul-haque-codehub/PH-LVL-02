type User = {
  name: {
    firstname: string;
    lastname: string;
  };
  age: number;
  isStudent?: boolean;
};

const user1: User = {
  name: {
    firstname: "a",
    lastname: "b",
  },
  age: 11,
};
console.log(user1);

type Calc = (n1: number, n2: number) => number;

const calc: Calc = (n1, n2) => {
  return n1 + n2;
};

calc(10, 20);

type UserRole = "user" | "editor" | "admin";

function getUserRole(role: UserRole) {
  if (role === "admin") {
    return "yes this i am admin";
  } else if (role === "editor") {
    return "yes editor";
  }
}

// getUserRole("guest");

type Developer = {
  name: {
    firstname: string;
    lastname: string;
  };
  role: string;
};

type Engineer = {
  designation: string;
  worktype: string;
};

const ceo: Developer & Engineer = {
  name: { firstname: "asdf", lastname: "azizul" },
  role: "ceo",
  designation: "engineer",
  worktype: "remote",
};
console.log(ceo);