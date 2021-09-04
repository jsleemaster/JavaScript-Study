'use strict';
//프로토타입을 베이스로 만들어진 자바스크립트 문법
//1.class 선언
class Person {
    //생성자 constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name} : 'hello!'`)
    }
}
const smlee = new Person('smlee', 28);

console.log(smlee.name)
console.log(smlee.age);
smlee.speak();

//2. getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        //2.1앞에 this.age는 get을 호출하게됨 , 뒤에 age는 set을 호출하게됨
        this.age = age;
    }
    get age() {
        //2.2 그래서 구분을하기위해 _를 붙힘
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
//2.3오류 발생 셋터가 맞지 않기 때문
console.log(user1.age);

// 3. Field (public, private)
// 지원을 안해서 아직은 무리임
class Experiment {

    publicField = 2;
    //#은 private 
    #privateField = 0
}

//4. Static 속성과 메소드
class Article {
    static test = 'Hello World';
    constructor(input) {
        this.input = input
    }
    static test() {
        console.log(Article.test);
    }
}
const Article1 = new Article(1)
const Article2 = new Article(2)
console.log(Article1.test) // 값이 나오지 않음 => static은 클래스를 지정해도 나오지 않는다.
console.log(Article.test) // 값이 나옴 => 직접 지정해서 연결해서 써야 나옴 // 메모리 사용량을 줄이기 위해 사용함

//5.상속과 다양성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} `)
    }
    getArea() {
        return width * this.height;
    }
}
//Shape에 있는 모든 것들이 상속됨
class Rectangle extends Shape { }
class Triangle extends Shape {
    getArea() {
        //원하는 메소드만 따로 수정할수 있음.
        // '오버라이딩' 이라고 함
        return (this.width * this.height) / 2;
    }

    //toString이 애초에 존재하기에 오버라이딩할 수 있음
    toString() {
        return `Triangle : color : ${this.color}`
    }
}

//6. Class 가 맞는지 확인하는 것 'instanceOf'
Triangle instanceof Shape // True
Triangle instanceof Object // True
Triangle instanceof Rectangle // False