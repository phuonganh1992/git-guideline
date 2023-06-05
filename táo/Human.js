class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }
  isMale() {
    return (this.gender = true);
  }
  setGender(gender) {
    this.gender = gender;
  }
  checkApple(a) {
    return a.isEmpty();
  }
  eat(b) {
    if (b.weight > 0) {
      b.decrease();
      this.weight++;
    } else {
      alert("Hết táo r nha!");
    }
  }
  say(c) {
    console.log(this.name + "Ahihi đồ ngốk!", c);
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getWeight() {
    return this.weight;
  }
  setWeight(weight) {
    this.weight = weight;
  }
}
