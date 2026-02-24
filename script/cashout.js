document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        const agentNumberInput = document.getElementById('cashout-number')
        // console.log(agentNumberInput.value)

        if (agentNumberInput.value.length != 11) {
            alert('Invalid Agent Number');
            return;
        }

        const cashoutBalanceInput = document.getElementById('cashout-amount');
        if (cashoutBalanceInput.value < 50) {
            alert('Please Cashout Amount minimum 50 Tk')
            return;
        }

        const balanceElement = document.getElementById('balance')


        const newBalance = Number(balanceElement.innerText) - Number(cashoutBalanceInput.value)
        console.log(newBalance)
        if (newBalance < 0) {
            alert('Invalid Amount')
            return;
        }

        const cashoutPinInput = document.getElementById('cashout-pin')
        if (cashoutPinInput.value === '1234') {
            alert('Cashout Successful');
            balanceElement.innerText = newBalance;
        }
        else {
            alert('Invalid Pin')
        }

    })


