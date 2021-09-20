//Temporal Dead Zone : let, const

let age = 30;
function abc() {
    console.log(age)
    let age = 30 // error
}

//1. let
//1.1 선언단계
//1.2 초기화단계
//1.3 할당단계

//2. const
//2.1 선언+초기화+할당
//선언만 하면 error, 초기화만하면 error ,한번에 해야함

//let 과 const 는 블록 스코프
//for문 , if문 , while, try/catch 문 , 함수(function )