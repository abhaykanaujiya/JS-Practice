// find duplicates in array
 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,2,4,];
 const len = arr.length;
 const result = [];
 for (let i = 0; i < len; i++){
     for (let j = i + 1; j < len; j++){
         if (arr[i] === arr[j]){
             result.push(arr[i]);
         }
     }
 }
 console.log(result);