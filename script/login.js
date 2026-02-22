document.getElementById('login-btn')
    .addEventListener('click', function () {
        //1- get the mobile number
        const numberInput = document.getElementById('input-number')
        const contactNumber = numberInput.value;
        console.log(contactNumber)

        // 2- get the pin
        const pinInput = document.getElementById('input-pin')
        const pin = pinInput.value
        console.log(pin)
        // 3- match pin and mobile number
        if (contactNumber == '01234567890' && pin == '1234') {
            //3-1 true ::: > alert > home page 
            alert('login Success')
            // window.location.replace('/home.html')
            window.location.assign('/home.html')
        }
        else {
            //3-2 true ::: > alert > return 
            alert('login failed')
            return;

        }
    })