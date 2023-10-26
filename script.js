let input = document.querySelector(".container input");
let checkBtn = document.querySelector(".container button");
let infoTxt = document.querySelector(".info-tex");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display
    if(reverseInput !== filterInput){
        return console.log("Not a Palindrome");
    };
    console.log("Palindrome");
});

input.addEventListener("keyup",() => {
    filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    return checkBtn.classList.remove("active");
});