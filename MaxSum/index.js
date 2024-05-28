// max sum of subarray
const arr=[2,-1,4,6,3,-2];
let current=0;
let maxSum=0;
const len=arr.length;


for(i=0;i<len;i++){
    for(j=1;j<len;j++){
        current=arr[i]+arr[j];
        if(current>maxSum){
        maxSum=maxSum+current;    
        // }
        
    }

    }
};
console.log(maxSum);

// optimized with ( On ) complexity
