document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // 1. get the agent number & validate 
        const cashoutNumber = getValueFromInput("cashout-number")

        if (cashoutNumber.length != 11) {
            alert("Invalid The Agent Number")
            return;
        }
        // 2. get the amount 
        const cashoutAmount = getValueFromInput("cashout-amount")

        if (cashoutAmount < 50) {
            alert('Invalid Amount Please select minimum 50 TK')
            return;
        }

        // 3. get the current balance 
        // const balanceElement = document.getElementById('balance')


        const currentBlance = getBalance();
        // 4. calculate balance 

        const newBalance = currentBlance - Number(cashoutAmount)
        console.log(newBalance)
        if (newBalance < 0) {
            alert("Invalid Amount ")
            return;
        }
        const pin = getValueFromInput("cashout-pin")
        if (pin === '1234') {
            alert("Cashout Successful")
            setBalance(newBalance);
            // 1- history-container  ke add korbo 
            const history = document.getElementById('history-container');
            // 2- new div create korbo 
            const newHistory = document.createElement('div');
            // 3- new div innerHTML korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
            Cashout Successful. ch
            Cashout: ${cashoutAmount} Taka Success, to ${cashoutNumber} new date: ${new Date()}
            </div>
            `
            // 4- history-container e newDiv append korbo
            history.appendChild(newHistory);
        }
        else {
            alert("Invalid Pin")
            return;
        }
    })




// document.getElementById('cashout-btn')
//     .addEventListener('click', function () {
//         const agentNumberInput = document.getElementById('cashout-number')
//         // console.log(agentNumberInput.value)

//         if (agentNumberInput.value.length != 11) {
//             alert('Invalid Agent Number');
//             return;
//         }

//         const cashoutBalanceInput = document.getElementById('cashout-amount');
//         if (cashoutBalanceInput.value < 50) {
//             alert('Please Cashout Amount minimum 50 Tk')
//             return;
//         }

//         const balanceElement = document.getElementById('balance')


//         const newBalance = Number(balanceElement.innerText) - Number(cashoutBalanceInput.value)
//         console.log(newBalance)
//         if (newBalance < 0) {
//             alert('Invalid Amount')
//             return;
//         }

//         const cashoutPinInput = document.getElementById('cashout-pin')
//         if (cashoutPinInput.value === '1234') {
//             alert('Cashout Successful');
//             balanceElement.innerText = newBalance;
//         }
//         else {
//             alert('Invalid Pin')
//         }

//     })


