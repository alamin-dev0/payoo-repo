document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // 1. get the agent number & validate 
        const cashoutNumberInput = document.getElementById('cashout-number');
        const cashoutNumber = cashoutNumberInput.value;
        console.log(cashoutNumber)
        // 2. get the amount , validate , convert to number 
        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmount = cashoutAmountInput.value;
        console.log(cashoutAmount)
        // 3. get the current balance , validate , convert to number 
        // 4.  calculate new Balance 
        // 5. get the pin and verify
        // 5-1. true : show and alert > set balance 
        // 5-2 . true : show an error alert > return
    })