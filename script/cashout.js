document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // 1. get the agent number & validate 
        const cashoutNumberInput = document.getElementById('cashout-number');
        const cashoutNumber = cashoutNumberInput.value;
        console.log(cashoutNumber)

        if (cashoutNumber.length != 11) {
            alert('Invalid Agent Number');
            return;
        }

        // 2. get the amount , validate , convert to number 
        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmount = cashoutAmountInput.value;
        console.log(cashoutAmount)

        if (cashoutAmount < 50) {
            alert('Please Cashout Amount minimum 50 tk')
            return;
        }


        // 3. get the current balance , validate , convert to number 
        const balanceElement = document.getElementById('balance')
        const balance = balanceElement.innerText;
        console.log(balance)



        // 4.  calculate new Balance 
        const newBalance = Number(balance) - Number(cashoutAmount)

        if (newBalance < 0) {
            alert('Invalid Amount');
            return;
        }




        // 5. get the pin and verify
        const cashoutPinInput = document.getElementById('cashout-pin')
        const pin = cashoutPinInput.value
        if (pin === '1234') {
            // 5-1. true : show and alert > set balance 
            alert('Cashout Successful')
            console.log('New balance', newBalance)
            balanceElement.innerText = newBalance;
        }
        else {
            // 5-2 . true : show an error alert > return
            alert('Invalid Pin')
            return;

        }

    })