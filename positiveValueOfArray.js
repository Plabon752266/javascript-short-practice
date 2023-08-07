// An array contain many positive and negative number. u have to find out only positive no and run a loop into this array. if loop find out any negative value it will automatically stop. and rest of positive values will show into a new array.

// 
function positiveNumber(array) {
    const positiveArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array < 0 ) {
            break;
        }
        positiveArray.push(element);
        return positiveArray;
    }
}
const result = positiveNumber([45, 27, 57, 36, 24, -24, 57, 36, -20])
console.log(result);