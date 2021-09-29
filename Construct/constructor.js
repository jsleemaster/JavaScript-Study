function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}
const User1 = new User('smlee', 22)
let user1 = new User('smlee', 24)
user1.sayName() // smlee
//생성자를 이용

//this로 user의 데이터를 정해줄 수 있다.