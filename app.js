class Sort {
  static bubble(arr) {
    let isDone = true;
    while (isDone) {
      isDone = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          var tempData = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tempData;
          isDone = true;
        }
      }
    }
    return arr;
  }
  static insertion(arr){
    
        for(let i= 1; i<arr.length;i++){
            var tempData = arr[i];
            let j = i-1;
            while(j>=0 && arr[j]>tempData){
                arr[j+1]= arr[j];
                j=j-1;         
            }
            arr[j+1] = tempData;
        }
        return arr;
        
  }
}

let realArr = ["aab","az","aa"];
console.log(Sort.insertion(realArr));
console.log(Sort.bubble(realArr));

/*console.log("unsorted array : " + realArr);

console.log("sorted array : " + Sort.bubble(realArr));
console.log("sorted array : " + Sort.insertion(realArr));
*/