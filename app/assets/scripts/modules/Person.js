class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  greet() {
    console.log(
      `Hello my name is ${this.name} and my favourite color is ${this.color}`
    );
  }
}

module.exports = Person;
