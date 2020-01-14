// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}

