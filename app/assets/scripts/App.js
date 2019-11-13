import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(`${this.name} now pays taxes.`);
  }
}

const john = new Person("John Doe", "Green");
john.greet();

alert("Wow it works");

const jane = new Adult("Jane Smith", "Orange");
jane.greet();
jane.payTaxes();
