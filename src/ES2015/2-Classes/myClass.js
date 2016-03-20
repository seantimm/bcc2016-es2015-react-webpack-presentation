class MyBase {
  constructor(name) { this.name = name }
}
class MyClass extends MyBase {
  constructor(name) {
    super(name)
  }
  sayMyName() {
    console.log(this.name)
  }
}

var inst = new MyClass('example')
inst.sayMyName()