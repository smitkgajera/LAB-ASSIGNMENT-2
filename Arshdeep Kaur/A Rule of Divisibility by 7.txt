// https://www.codewars.com/kata/55e6f5e58f7817808e00002e

function seven(m) {
let count = 0;

  while(m > 99) {
    m = parseInt(m / 10) - (2 * (m % 10)); 
    count++;
  }

  return [m, count];
}