// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
// }//storee the value ex; 1+4

// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function calculateResult() {
//     try {
//         document.getElementById('display').value = eval(document.getElementById('display').value);
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }

//arrow func
const appendToDisplay = (value) => {
    document.getElementById('display').value += value;
};

const clearDisplay = () => {
    document.getElementById('display').value = '';
};

const calculateResult = () => {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
};

//eval() is a built-in JavaScript function that can evaluate strings as JavaScript code. 
//It can handle mathematical operations even when the numbers are in string format
//(Not-a-Number) error if we using abc..