// setTimeout()
//방법은 두개
const tId = function fn(n) {
    console.log(3)
}
setTimeout(fn, 3000, 'smLee') // 함수 , 시간(delay), 인수로 받아옴 
clearTimeout(tId) // 종료

//setInterval
function sN(name) {
    console.log(name)
}
const tId = setInterval(sN, 3000, 'smlee') // 끝날때 까지 무한 반복해서 나온다
clearInterval(tId) //종료

//시간은 0이라고해도 밑에 있는것보다는 느리게 찍어서 보여준다.