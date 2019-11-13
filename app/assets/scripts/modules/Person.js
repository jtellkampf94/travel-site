class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  greet() {
    console.log(
      `Hi there my name is the ${this.name} and my favourite color is ${this.color}`
    );
  }
}

export default Person;
