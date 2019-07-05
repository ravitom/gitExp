class User {
  constructor(id, a, fname, lname) {
    this.id = id;
    this.age = a;
    this.fname = fname;
    this.lname = lname;
  }

  printName() {
    return this.fname + " " + this.lname;
  }
}

const rt = new User(100, 30, "ravi", "tom");

function printName() {
  document.querySelector("#Name").innerHTML = rt.printName();
  document.querySelector(".id").innerHTML = rt.id;
  document.querySelector(".fname").innerHTML = rt.fname;
  document.querySelector(".lname").innerHTML = rt.lname;
  document.querySelector(".age").innerHTML = rt.age;
}
printName();
