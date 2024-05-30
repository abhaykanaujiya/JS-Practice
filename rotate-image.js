// max sum of subarray
// const arr=[2,-1,4,6,3,-2];
// let current=0;
// let maxSum=0;
// const len=arr.length;

// for(i=0;i<len;i++){
//     for(j=1;j<len;j++){
//         current=arr[i]+arr[j];
//         if(current>maxSum){
//         maxSum=maxSum+current;
//         // }

//     }

//     }
// console.log(maxSum);

// optimized with ( On ) complexity
// const arr=[2,-1,4,6,3,-2];
// let current=0;
// let maxSum=0;
// const len=arr.length;

// for(i=0;i<len;i++){
//   if(current<arr[i]){
//       current=current+arr[i];
//         maxSum=maxSum+current;
//   }
//   current=0;
//     }
// console.log(maxSum);

//---------------------------------------------------------

// roatate 3*3 matrix to 90 degree

const rotateImage = (arr) => {
    let n = arr.length;
    let newArray = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            newArray[j] = newArray[j] || [];
            newArray[i][j] = arr[n - j - 1][i];
        }
    }
    return newArray;
};

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const result = rotateImage(arr);
console.log(result); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
