const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDisp = document.getElementById('results-div');

const checkPhoneNumValid = input =>{
    if (input === '') {
        alert('Please provide a phone number');
        return;
    }

    const phoneRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/

    resultDisp.textContent = `${phoneRegex.test(input)? 'Valid':'Invalid'} US Number: ${input}`;
}

checkBtn.addEventListener("click", () => {
    checkPhoneNumValid(userInput.value);
});

clearBtn.addEventListener("click", () => {
    resultDisp.textContent = '';
});