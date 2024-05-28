const arr=[2,-1,4,6,3,-2];
let current=0;
let maxSum=0;
const len=arr.length;

for(i=0;i<len;i++){
   if(current<arr[i]){
      current=current+arr[i];
        maxSum=maxSum+current;
   }
   current=0;
    }
console.log(maxSum);