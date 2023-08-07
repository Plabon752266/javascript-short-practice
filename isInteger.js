// তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটা সংখ্যার ইনপুট নিবে। ফাংশন টির নাম হবে isInteger().আউটপুট হিসেবে একটি boolean রিটার্ন করবে। 
// সংখ্যাটি integer হলে true রিটার্ন করবে। 
// অন্যথায় false রিটার্ন করবে 


function isInteger(num) {
    if (typeof num !== "number") {
        return "pls provide me a number"
        
    }
    else{
        if (num % 1 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
    
}

const outputGivenNumber = isInteger(-5);
console.log(outputGivenNumber);