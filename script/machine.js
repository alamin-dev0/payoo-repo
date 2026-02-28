// machine id -- > input value 
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine 

function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('current balance ', balance)
    return Number(balance);
}



// machine - > set balance 

function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// machine id > hide all and show id 
function showOnly(id) {
    const addMoney = document.getElementById('add-money-section');
    const cashout = document.getElementById('cashout');
    // console.log(`add money ${addMoney} cashout ${cashout}`)
    // hide all
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    // show only id
    const selectedSection = document.getElementById(id);
    selectedSection.classList.remove('hidden');
    

}