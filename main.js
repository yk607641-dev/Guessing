// const x = Math.floor(Math.random()*100)+1;
// let number=document.getElementById("number");
// const btn=document.getElementById("button");
// const result=document.querySelector(".result");
// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const guess = parseInt(number.value.trim());
//     if(isNaN(guess)){
//    result.innerHTML="AREE NUMBER TO SELECT KRLO ITNI BHI KYA JALDI H"
//     }
//     else if(guess>x){
//         result.innerHTML="SAHI JA RAHE HO THODA CHOTA NUMBER SELECT KRO"
//     }
//      else if(guess<x){
//         result.innerHTML="SAHI JA RAHE HO THODA BADA NUMBER SELECT KRO"
//     }
//     else{
//         result.innerHTML="🎉 CORRECT NUMBER!"
//     }
//     number.value="";

// })
const x = Math.floor(Math.random() * 100) + 1;

let number = document.getElementById("number");
const btn = document.getElementById("button");
const result = document.querySelector(".result");

let attempts = 0;

btn.addEventListener("click", () => {

    const guess = parseInt(number.value.trim());

    if (isNaN(guess)) {
        result.innerHTML = "Number daal bhai kaha bhag ra h😅";
        return;
    }

    attempts++;

    if (guess > x) {
        result.innerHTML = `“📉 Thoda aur dimag lagao… number bada nahi, chhota hai!” (Attempts: ${attempts})`;
    }
    else if (guess < x) {
        result.innerHTML = `“🔥 Guess ko boost karo… number abhi aur bada hai!”(Attempts: ${attempts})`;
    }
    else {
        result.innerHTML = `“🎊🎉 Badhai ho! Tum jeet gaye! 🏆🥳🔥”:${x} Total attempts: ${attempts}`;
    }
});
