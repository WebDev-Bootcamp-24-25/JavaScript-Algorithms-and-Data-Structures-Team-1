const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const palindromeCheck = input =>{

    const LowerReplaced = input.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

    if (input === "") {
        alert("Please input a value");
    } else if (input.length === 1) {
        displayResult(`${input} is a Palindrome`);
    } else if (LowerReplaced === [...LowerReplaced].reverse().join("")) {
        displayResult(`${input} is a Palindrome`);
    } else {
        displayResult(`${input} is not a Palindrome`);
    }
}

checkButton.addEventListener("click", () => {
    palindromeCheck(textInput.value);
    userInput.value = '';
});

textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        palindromeCheck(textInput.value);
        userInput.value = '';
    }
  });


function displayResult(resultText) {
    result.innerHTML = ''; 
    const words = resultText.split(" "); 

    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.animationDelay = `${index * 0.3}s`; // Delay each word
        result.appendChild(span);
        result.appendChild(document.createTextNode(" ")); // Add space between words
    });
}
