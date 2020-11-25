class User{
    constructor(firstname, lastname, credits){
        this.firstname = firstname
        this.lastname = lastname
        this.credits = credits
    }
  getFullName(){
      let fullname = `${this.firstname} ${this.lastname} is my fullname`
      return fullname;
  }    
  editName(newname){
      const myname = newname.split(" ");
      this.firstname = myname[0];
      this.lastname = myname[1];
  }
}
//Inheritance
class Teacher extends User{
    constructor(firstname,lastname,credits,subject){
        super(firstname,lastname,credits);
        this.subject = subject;
    } 
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} are my fullnames and I teach ${this.subject}`;
        return fullname;
    }
    favDrink(name){
        console.log(`my favorite drink is ${name}`);
    }
}
 
const sheila = new Teacher('Sheila', 'Noella',50,'Java');
console.log(sheila.getFullName());
sheila.editName('Noella  Sheila ');
console.log(sheila.getFullName());
sheila.favDrink('Coffee');