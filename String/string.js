string.length //문자열 길이
string.toUpperCase() //모든 영문을 대문자로
string.toLowerCase() //모든 영문을 소문자로
string.indexOf() //몇번째에 위치하는지 확인 없으면 -1
string.slice(n, m) //n 시작점 , m 없으면 문자열 끝까지 , 양수면 그 숫자까지 , 음수면 끝에서부터 셈
string.substring(n, m) //n과 m사이의 문자열 반환 음수는 안된다  n과 m이 바껴도 상관없음
string.substr(n, m) // n부터 시작 m개를 가져옴 
string.trim() // 앞뒤 공백제거
string.repeat(n) // n번 반복
//문자열은 비교가 가능하다 "a" > "c" true
//why? 아스키 코드인 문자는 이진법으로 바꾸면 숫자처럼 비교가 가능하기에
"a".codePointAt(0) // 97 아스키코드 문자의 번호를 알아내는 방법 