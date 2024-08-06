function Person(personName,personAge,personHairColor) {
    this.name = personName;
    this.age = personAge;
    this.hairColor = personHairColor;
    this.introduction = function () {
        return 'hi my name is ' + personName + ' iam ' + personAge + ' my hair color is ' + personHairColor;
    }
}

let person1 = new Person('ahmed', '25', 'black');

console.log(person1.introduction())