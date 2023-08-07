// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে .

function isJavaScriptFile(str) {
    if (typeof str !== "string") {
        return"pls provide a string into the function call"   
    }
    
    else{
        if ( str.toLowerCase().endsWith(".js") ) {
            return true;
        }
        else{
            return false;
        }
    }
}

const givenData = isJavaScriptFile('shawon.js');
console.log(givenData);