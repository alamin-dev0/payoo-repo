document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        // 1. get the bank
        const bankAccount = getValueFromInput("add-money-bank")
        //    console.log(bankAccount)
        if (bankAccount === "Select a Bank") {
            alert("Please Select a Bank")
            return;
        }

        // 2. get the account number
        const accountNumber = getValueFromInput("add-money-account-number")
        if (accountNumber.length != 11) {
            alert("Invalid Account Number")
            return;
        }

        // 3. get the amount
        const amount = getValueFromInput("add-money-amount")
        const currentBalance = getBalance();
        if (amount < 50) {
            alert("Invalid Amount Please select minimum 50 TK")
            return;
        }


        // 5. calculate new balance
        const newBalance = currentBalance + Number(amount);
        // 6. get the pin
        const pin = getValueFromInput("add-money-pin")
        if (pin === '1234') {
            alert(`Add Money Successful. New Balance: ${newBalance} new date: ${new Date()}`)
            setBalance(newBalance);

            // const removeClassFromHistory = document.getElementById('history-container');
            // removeClassFromHistory.classList.add('hidden');
            // removeClassFromHistory.classList.remove('hidden');

            // 1- history-container  ke add korbo 
            const history = document.getElementById('history-container');
            // 2- new div create korbo 
            const newHistory = document.createElement('div');
            // 3- new div innerHTML korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
            Add Money Successful. 
            New Balance: ${newBalance}, acc-no ${accountNumber} new date: ${new Date()}
            </div>
            `
            // 4- history-container e newDiv append korbo
            history.appendChild(newHistory);
        }
        else {
            alert("Invalid Pin")
            return;
        }

    });

