// একটা ফাংশন নিতে হবে printDetails(). প্যারামিটার হিসেবে একটা অবজেক্ট নিতে হবে সেখানে মানুষের নাম, বয়স, ইমেইল, ফোন নং, এড্রেস থাকবে. যদি কোন অবজেক্ট মিসিং থাকে তাহলে প্রিন্ট হবে "নাই "



function printDetails(person){
    if(typeof person !== "object"){
        return "please provide me a object"
    }else{
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
        const phone = person.phone || "nai";
        const address = person.address || "nai";
        return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr phone no "+phone+'. amar address ' + address;
    }

}

const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com",
    address: 'mirpur',
    phone: '01454785222'
}

console.log(printDetails(obj))