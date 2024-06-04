// using hashmap techniqu with complexity O(n)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,2,4,];
 const len = arr.length;
 const obj = {};
const array=[];
for(i=0;i<len;i++){
if(!obj[arr[i]]){
    obj[arr[i]]=1;
}else{
    array.push(arr[i]);
}
}
console.log(array);