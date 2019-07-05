class User{
    constructor(id,a,fname,lname)
{
    this.id=id;
    this.age=a;
    this.fname=fname;
    this.lname=lname;
}

printName(){
  return this.fname+' '+this.lname  
}

};

const rt = new User(100,30,'ravi','tom')

function printName(){
document.querySelector('#Name').innerHTML=rt.printName()
}
printName()