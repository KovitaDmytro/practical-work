function sayHello() {
    let name = document.getElementById("name").value;
    alert(`Привіт, ${name}!`);
}

function calculateSum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("sumResult").innerHTML = `Сума: ${sum}`;
}

function generateRandom() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomResult").innerHTML = `Випадкове число: ${randomNum}`;
}

function checkPasswordStrength() {
    let password = document.getElementById("password").value;
    let strength = "";
    if (password.length < 6) {
        strength = "Дуже слабкий";
    } else if (password.length < 10) {
        strength = "Слабкий";
    } else if (password.length < 14) {
        strength = "Достатній";
    } else {
        strength = "Сильний";
    }
    document.getElementById("passwordStrength").innerHTML = `Сила пароля: ${strength}`;
}

function calculateFactorial() {
    let num = parseInt(document.getElementById("number").value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("factorialResult").innerHTML = `Факторіал ${num}: ${factorial}`;
}

function checkPrime() {
    let num = parseInt(document.getElementById("prime").value);
    let isPrime = true;
    if (num === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        document.getElementById("primeResult").innerHTML = `${num} - просте число`;
    } else {
        document.getElementById("primeResult").innerHTML = `${num} - не просте число`;
    }
}

function reverseString() {
    let str = document.getElementById("inputString").value;
    let reversed = str.split('').reverse().join('');
    document.getElementById("reversedString").innerHTML = `Реверс рядка: ${reversed}`;
}

function checkPalindrome() {
    let word = document.getElementById("palindrome").value;
    let reversedWord = word.split('').reverse().join('');
    if (word.toLowerCase() === reversedWord.toLowerCase()) {
        document.getElementById("palindromeResult").innerHTML = `Це паліндром!`;
    } else {
        document.getElementById("palindromeResult").innerHTML = `Це не паліндром!`;
    }
}

function findMax() {
    let numbers = document.getElementById("numberList").value.split(',').map(Number);
    let max = Math.max(...numbers);
    document.getElementById("maxNumber").innerHTML = `Найбільше число: ${max}`;
}
