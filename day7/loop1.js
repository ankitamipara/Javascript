// Function to check if a given string is a palindrome
function checkPalindrome() {
    // Get the input string
    const input = document.getElementById('inputString').value;

    // Remove any non-alphanumeric characters and convert the string to lowercase
    const cleanedString = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is equal to its reversed version
    if (cleanedString === reversedString && cleanedString.length > 0) {
        document.getElementById('result').textContent = `"${input}" is a palindrome!`;
    } else {
        document.getElementById('result').textContent = `"${input}" is not a palindrome.`;
    }
}
