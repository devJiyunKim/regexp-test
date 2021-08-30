const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
//'g' 대소문자 구분, 'gi' 대소문자 구분 안함

// 리터럴 방식
// const regexp = /the/gi
// console.log(str.match(regexp))

// 메소드 방식
// const regexp = /fox/gi
// console.log(regexp.test(str)) //true
// console.log(str.replace(regexp, 'AAA'))
// str = str.replace(regexp, 'AAA') //재할당
// console.log(str)

// 플래그(옵션)
// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/the/gi)) //같음

// console.log(str.match(/\./gi)) //그냥 .은 명령이기 때문에 백슬래시를 붙여줌.
// console.log(str.match(/\.$/gim)) //

// 패턴
// console.log(str.match(/h..p/g)) //h로 시작, p로 끝나는 단어
// console.log(str.match(/fox|dog/g)) //fox 또는 dog
// console.log(str.match(/https?/g))
// console.log(str.match(/\b\w{2,3}\b/g)) // 

// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\bf\w{1,}\b/g)) //frozen, fox
// console.log(str.match(/\d{1,}/g)) //1개 이상의 숫자

// const h = `   the hello  world   !`
// console.log(h.replace(/\s/g, '')) //공백, 띄어쓰기, 줄바꿈 등 replace로 삭제

//console.log(str.match(/.{1,}(?=@)/g)) //@를 기준으로 1 이상 일치
console.log(
  str.match(/(?<=@).{1,}/g)
)