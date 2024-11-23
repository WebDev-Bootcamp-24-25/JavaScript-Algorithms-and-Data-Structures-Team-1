const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const LowerReplaced = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

    if (textInput.value === "") {
        alert("Please input a value");
    } else if (textInput.value.length === 1) {
        displayResult(`${textInput.value} is a Palindrome`);
    } else if (LowerReplaced === [...LowerReplaced].reverse().join("")) {
        displayResult(`${textInput.value} is a Palindrome`);
    } else {
        displayResult(`${textInput.value} is not a Palindrome`);
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
