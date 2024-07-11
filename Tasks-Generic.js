function oneNumber(){
    var answer;
    var number1 = document.getElementById('numberInput1').value;
    var number2 = document.getElementById('numberInput2').value;
    
    
    //p-1
    answer = number1 +' is Prime Number';
    for (var i=2; i<=number1/2; i++){
        if((number1%i)==0){
            answer = number1 +' is not Prime Number';
            break;
        }
    }
    document.getElementById('p1').innerText = answer;
    //p-2
    answer = findLcm(number1, number2);
    document.getElementById('p2').innerText = answer;

    //p-3
    answer = findFactorial(number1);
    document.getElementById('p3').innerText = answer;

    //p-5
    answer = number1 +' is odd';
    if (number1%2 == 0){
        answer = number1 +' is even';
    }
    document.getElementById('p5').innerText = answer;

}

function oneString(){
    var answer;
    const string = document.getElementById('stringInput').value;
    
    console.log('hello', string);
    //p-4
    if (!string) {
        console
        answer = 'Please enter a string.';
    }
    else{
        const resultString = string.charAt(0).toUpperCase() + string.slice(1);
        answer = `Converted string: ${resultString}`;
    }
    document.getElementById('p4').innerText = answer;

    //p-6
    if (!string) {
        answer = 'Please enter a string.';
    }
    else {
        const normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedString = normalizedString.split('').reverse().join('');
        const isPalindrome = normalizedString === reversedString;
  
        if (isPalindrome) {
          answer = `"${string}" is a palindrome.`;
        } else {
          answer = `"${string}" is not a palindrome.`;
        }
    }
    document.getElementById('p6').innerText = answer;
}

//lcm
function findLcm(number1, number2){
    var answer;
    if (isNaN(number1) || isNaN(number2)) {
        answer = 'Please enter valid numbers.';
        return answer;
    }

    const result = lcm(number1, number2);
    answer = `The LCM of ${number1} and ${number2} is ${result}.`;
    return answer;
}
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}
function gcd(a, b) {
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
}

// factorial 
function factorialIterative(n) {
    if (n < 0) return -1; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // 0! is 1
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  function findFactorial(number) {
    var answer;
    if (isNaN(number)) {
      answer = 'Please enter a valid number.';
      return answer;
    }

    const result = factorialIterative(number);
    answer = `The factorial of ${number} is ${result}.`;
    return answer;
  }