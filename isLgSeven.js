// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

function isLGSeven(num) {
    if (typeof num !== "number") {
        return "pls provide a number in function calling"  
    }
    else{
        const differ = num - 7
        if (differ < 7) {
            return differ;
        }
        else{
            return num * 2;
        }
    }
}
const result = isLGSeven(-15);
console.log(result);