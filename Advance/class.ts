class Erfan {
  name: string;
  age: number;
  place: string;

  constructor(name: string, age: number, place: string) {
    this.name = name;
    this.age = age;
    this.place = place;
  }

  getFullData(): string {
    return `The name is ${this.name} age is ${this.age} place is ${this.place}`;
  }
}

const ErfanData = new Erfan("erfan", 12, "Manjeri");
console.log(ErfanData.getFullData());

