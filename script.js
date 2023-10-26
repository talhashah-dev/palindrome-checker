let input = document.querySelector(".container input");
let checkBtn = document.querySelector(".container button");
let infoTxt = document.querySelector(".info-text");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.visibility = "visible";
    if (reverseInput !== filterInput) {
        infoTxt.innerHTML = `No, <span>'${input.value}'</span> isn't a Palindrome!`;
    } else {
        infoTxt.innerHTML = `Yes, <span>'${input.value}'</span> is a Palindrome!`;
    }
});

input.addEventListener("input", () => {
    filterInput = input.value.toLowerCase().replace(/[^a-z0-9]/ig, "");
    if (filterInput) {
        checkBtn.classList.add("active");
    } else {
        infoTxt.style.visibility = "hidden";
        checkBtn.classList.remove("active");
    }
});
