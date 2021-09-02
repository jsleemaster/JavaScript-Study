//Object


//Object = {key : value}
//생성방법
const obj1 = { }; // 리터럴
const obj1 = new Object; //생성자

const smLee = { name: 'smLee', age: 4 };

//1.가능은 하나 안하는게좋다
smLee.hasJob = true;
//2.삭제도 됨
delete smLee.name