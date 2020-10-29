const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

let isPressedEqual = false;

function calculate(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        isPressedEqual = true;
        if (display.value !== '') {
            try {
                display.value = eval(display.value);
            } catch (err) {
                display.value = 'Invalid input';
            }
        }
    } else if (clickedButtonValue === 'C') {
        display.value = '';
    } else {
        if (isPressedEqual) {
            isPressedEqual = false;
            display.value = '';
        }
        display.value += clickedButtonValue;
    }
}