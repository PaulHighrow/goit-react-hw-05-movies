export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

let numbers = 90000000;

console.log(numbers.toString());
console.log(numbers.toString().split(''));
console.log(
  numbers
    .toString()
    .split('')
    .map((symbol, i, a) => {
      console.log(symbol);
      console.log(symbol[i]);
      console.log(a.length - 1);
      return !(i + (1 % 3)) ? symbol + ',' : symbol;
    })
);
console.log(
  numbers
    .toString()
    .split('')
    .map((symbol, i, a) =>
      !((a.length - (i + 1)) % 3) && i + 1 !== a.length ? symbol + ',' : symbol
    )
    .join('')
);
