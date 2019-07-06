class User {
  constructor(id, fname, lname, dob) {
    this.id = id;
    this.dob = dob;
    this.fname = fname;
    this.lname = lname;
  }
  personAge() {
    if (this.dob) {
      let year = this.dob.split("/");
      return new Date().getFullYear() - year[2];
    } else {
      console.log("DOB is invalid");
    }
  }

  printName() {
    return this.fname + " " + this.lname;
  }
}

const rt = new User(100, "ravi", "tom", "16/06/1983");

function printName() {
  document.querySelector("#Name").innerHTML = rt.printName();
  document.querySelector(".personAge").innerHTML = rt.personAge();
}
printName();
