
https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

function vertMirror(str) {
    return str.split('\n')
      .map(line => line.split('').reverse().join(''))
      .join('\n')
}
function horMirror(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}
