function convertToRoman() {
  const inputNumber = document.getElementById('number').value;
  const outputElement = document.getElementById('output');

  if (inputNumber === '') {
    outputElement.textContent = 'Please enter a valid number';
    return;
  }

  let num = parseInt(inputNumber);

  if (num < 1) {
    outputElement.textContent =
      'Please enter a number greater than or equal to 1';
  } else if (num >= 4000) {
    outputElement.textContent =
      'Please enter a number less than or equal to 3999';
  } else {
    let romanNumeral = convertNumberToRoman(num);
    outputElement.textContent = romanNumeral;
  }
}

function convertNumberToRoman(num) {
  const romanNumerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = '';

  for (let i = 0; i < numeralValues.length; i++) {
    while (num >= numeralValues[i]) {
      result += romanNumerals[i];
      num -= numeralValues[i];
    }
  }
  return result;
}
