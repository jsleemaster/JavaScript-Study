// 호이스팅 : 함수, 변수가 선언된 이후로부터 자동적으로 나타나는 것 맨위에 정렬시키는 것
// 1. 동기와 비동기 (sync 와 async)
// 콜백함수는 전달해준 함수를 나중에 불러오는 것
// 1.1 동기 콜백
function 즉시(print) {
    print();
}
즉시(() => console.log('하이'))
// 1.2 비동기 콜백
function 기다려(print, timeout) {
    setTimeout(print, timeout)
}
기다려(() => console.log('비동기 콜백'), 2000);

// 2.promise
// 3.async await