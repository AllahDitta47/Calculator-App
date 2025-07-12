
        let display = document.getElementById('display');
        let currentInput = '';
        let lastCharIsOperator = false;

        function appendToDisplay(value) {
            if (value === '.' && currentInput.includes('.')) {
                return;
            }
            if (['+', '-', '*', '/'].includes(value) && lastCharIsOperator) {
                return;
            }
            currentInput += value;
            display.textContent = currentInput || '0';
            lastCharIsOperator = ['+', '-', '*', '/'].includes(value);
        }

        function clearDisplay() {
            currentInput = '';
            display.textContent = '0';
            lastCharIsOperator = false;
        }

        function calculate() {
            try {
                if (currentInput) {
                    const result = eval(currentInput);
                    if (isNaN(result) || !isFinite(result)) {
                        display.textContent = 'Error';
                        currentInput = '';
                    } else {
                        display.textContent = result;
                        currentInput = result.toString();
                    }
                }
            } catch (error) {
                display.textContent = 'Error';
                currentInput = '';
            }
            lastCharIsOperator = false;
        }
    