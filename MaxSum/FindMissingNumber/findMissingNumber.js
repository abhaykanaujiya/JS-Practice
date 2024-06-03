const array=[1,2,4,5];
const n=array.length+1;
const expectedSum=(n*(n+1))/2;
let actuallSum=0;
for (let i = 0; i <array.length; i++) {
    actuallSum+=array[i];
}
console.log(expectedSum-actuallSum);
