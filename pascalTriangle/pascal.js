const row = 5;
let arr = [];
for (let i = 0; i < row; i++) {
  if (i === 0) {
    arr.push([1]);
  } else {
    const col = arr[i - 1];
    const newCol = [];
    newCol.push(1);
    for (let j = 0; j < col.length - 1; j++) {
      newCol.push(col[j] + col[j + 1]);
    }
    newCol.push(1);
    arr.push(newCol);
  }
}

console.log(arr);
