//상속
const car = {
    wheel: 4,
    drive() {
        console.log('drive..')
    }
}
const bmw = {
    color: 'red',
}
//중복된 값은 상속시킬 수 있다
bmw.__proto__ = car;
bmw.prototype.mirror = 'good'; //이렇게 직접추가 해서 사용해도됨
bmw.prototype.stop = () => console.log('stop') //이것도 마찬가지
bmw.hasOwnProperty(drive) // true

//instanceof 를 이용해 인스턴스 여부를 확인할 수 있음 
//constructor 로도 확인 가능