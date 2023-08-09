function sortMaker([arr1, arr2]) {
    if (arr1 < 0 || arr2 < 0) {
        return "Invalid Input"; 
    }    
    else if( arr1 = arr2){
        return "equal"
    }
    else if(
        arr1 > 0 || arr2 > 0
    ){
        const arr = arr1 , arr2
        return Math.max(arr);
    }
    }




const output = sortMaker([3, 5]);
console.log(output);