// An array contain many positive and negative number. u have to find out only positive no and run a loop into this array. if loop find out any negative value it will automatically stop. and rest of positive values will show into a new array.

// 
// 
function getPositiveNumbers(arr) {
    const positiveNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        positiveNumbers.push(arr[i]);
      } else {
        break; // Exit the loop if a negative value is encountered
      }
    }
    
    return positiveNumbers;
  }
  
  const inputValueOfArray = [10, 45, 25, -20, 81, 32, -55, 27];
  const positiveResult = getPositiveNumbers(inputValueOfArray);
  console.log(positiveResult);
  

//   or using for of loop

// function getPositiveNumbers(arr) {
//     const positiveNumbers = [];

//     for (const item of arr) {
//         if (item >= 0) {
//             positiveNumbers.push(item);
            
//         }else{
//             break;
//         }
//         return positiveNumbers;   
//     }
    
// }

// const result = [10, 45, 25, -20, 81, 32, -55, 27];
// const finalResult = getPositiveNumbers(result);
// console.log(finalResult);