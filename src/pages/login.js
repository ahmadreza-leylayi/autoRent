let numberInput = document.querySelector(".number-input");
let errorMessage = document.querySelector(".error");
let numberWrapper = document.querySelector(".number-wrapper");
const checkBox = document.querySelector("#checkbox");
let verificationCode = document.querySelector(".verification-code");
let inputRules = document.querySelector(".input-rules");
let submitButton = document.querySelector(".submit-button");

// number check
var regex = /^9\d{9}$/;

numberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkForm();
    }
});

numberInput.addEventListener("input", function () {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
    numberWrapper.classList.remove("border-[#F23218]");
    updateSubmitButtonState();
});

// checkbox status
checkBox.addEventListener("change", function () {
    updateSubmitButtonState();
    if (regex.test(numberInput.value) && this.checked) {
        submitButton.classList.remove("bg-[#F3F3F3]", "text-[#C2C2C2]");
        submitButton.classList.add("bg-primary", "text-white", "cursor-pointer");
    } else {
        submitButton.classList.remove("bg-primary", "text-white", "cursor-pointer");
        submitButton.classList.add("bg-[#F3F3F3]", "text-[#C2C2C2]", "cursor-not-allowed");
    }
});

// submit button
submitButton.addEventListener("click", function () {
    if (regex.test(numberInput.value) && checkBox.checked) {
        inputRules.classList.add("hidden");
        verificationCode.classList.remove("hidden");
    }
});

// verification nums
const inputs = document.querySelectorAll(".verification-number");

inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 1);
        this.classList.add("border-primary");
        if (this.value.length === 1 && index < inputs.length) {
            inputs[index - 1].focus(); 
        }
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && this.value === "" ) {
            inputs[index + 1].focus(); 
        }
    });
});

// submit form 
function checkForm() {
    const isValidNumber = regex.test(numberInput.value);
    const isCheckboxChecked = checkBox.checked;

    if (!isValidNumber) {
        errorMessage.textContent = "لطفاً یک شماره موبایل معتبر وارد کنید (مثل 9126548987)";
        errorMessage.style.display = "block";
        numberWrapper.classList.add("border-[#F23218]");
    } else if (!isCheckboxChecked) {
        errorMessage.textContent = "لطفاً قوانین را قبول کنید.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";

// show verfication 
         inputRules.classList.add("hidden");
        verificationCode.classList.remove("hidden");
    }

    
}

// submit button color & Timer
function updateSubmitButtonState() {
    const isValidNumber = regex.test(numberInput.value);
    const isCheckboxChecked = checkBox.checked;

    if (isValidNumber && isCheckboxChecked) {

        submitButton.classList.remove("bg-[#F3F3F3]", "text-[#C2C2C2]");
        submitButton.classList.add("bg-primary", "text-white", "cursor-pointer");


    //    timer 
        const timerElement = document.querySelector(".timer");
        let totalSeconds = 119;
        
        function updateTimer() {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        
            if (totalSeconds > 0) {
                totalSeconds--;
            } else {
                clearInterval(timerInterval);
                timerElement.textContent = "۰:۰۰";
            }
        }
        
        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();

        // end timer 
     
    } else {
        submitButton.classList.remove("bg-primary", "text-white", "cursor-pointer");
        submitButton.classList.add("bg-[#F3F3F3]", "text-[#C2C2C2]", "cursor-not-allowed");
    }
}
