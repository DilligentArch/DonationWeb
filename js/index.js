// Donate1
document.getElementById('donate1').addEventListener('click', function (event) {

    event.preventDefault();
    const balance = document.getElementById('balance').innerText;
    const newBalance = parseFloat(balance);


    const inputValue = getInput('input1')

    if (newBalance == 0 || inputValue > newBalance) {
        alert('You dont have enough balance')
    }
    else if (inputValue !== null && !isNaN(inputValue) && inputValue > 0) {
        alert('Succesful');
        const preTotalDonation1 = getInnerValue('balance1');
        const newInputValue1=parseFloat(inputValue);
        const newTotalDonation1 = preTotalDonation1 + newInputValue1;
        document.getElementById('balance1').innerText = newTotalDonation1;
         

        const tempBalance1=getInnerValue('balance');
        const newTempbalance=tempBalance1-newInputValue1;
        // console.log(tempBalance1, newTotalDonation1 );
        document.getElementById('balance').innerText= newTempbalance;
        document.getElementById('input1').value='';
        const s="flood at Noakhali, Bangladesh";
        const div= join(newInputValue1,s);
        const p=document.createElement("p");

        const now = new Date();
        const dateTimeString = `Date : ${now.toString()}`;
        p.innerText = dateTimeString;
        div.appendChild(p);
        appenChild('transection',div);

    }
    else {
        alert('Invalid input');
    }

})
// Donate2
document.getElementById('donate2').addEventListener('click', function (event) {

    event.preventDefault();
    const balance = document.getElementById('balance').innerText;
    const newBalance = parseFloat(balance);


    const inputValue = getInput('input2')

    if (newBalance == 0 || inputValue > newBalance) {
        alert('You dont have enough balance')
    }
    else if (inputValue !== null && !isNaN(inputValue) && inputValue > 0) {
        alert('Succesful');
        const preTotalDonation2 = getInnerValue('balance2');
        const newInputValue2=parseFloat(inputValue);
        const newTotalDonation2 = preTotalDonation2 + newInputValue2;
        document.getElementById('balance2').innerText = newTotalDonation2;
         

        const tempBalance2=getInnerValue('balance');
        const newTempbalance=tempBalance2-newInputValue2;
        // console.log(tempBalance1, newTotalDonation1 );
        document.getElementById('balance').innerText= newTempbalance;
        document.getElementById('input2').value='';
        const s="flood relief in feni, Bangladesh";
        const div= join(newInputValue2,s);
        const p=document.createElement("p");

        const now = new Date();
        const dateTimeString = `Date : ${now.toString()}`;
        p.innerText = dateTimeString;
        div.appendChild(p);
        appenChild('transection',div);


    }
    else {
        alert('Invalid input');
    }

})

// Donate3
document.getElementById('donate3').addEventListener('click', function (event) {

    event.preventDefault();
    const balance = document.getElementById('balance').innerText;
    const newBalance = parseFloat(balance);


    const inputValue = getInput('input3')

    if (newBalance == 0 || inputValue > newBalance) {
        alert('You dont have enough balance')
    }
    else if (inputValue !== null && !isNaN(inputValue) && inputValue > 0) {
        alert('Succesful');
        const preTotalDonation3 = getInnerValue('balance3');
        const newInputValue3=parseFloat(inputValue);
        const newTotalDonation3 = preTotalDonation3 + newInputValue3;
        document.getElementById('balance3').innerText = newTotalDonation3;
         

        const tempBalance3=getInnerValue('balance');
        const newTempbalance=tempBalance3-newInputValue3;
        // console.log(tempBalance1, newTotalDonation1 );
        document.getElementById('balance').innerText= newTempbalance;
        document.getElementById('input3').value='';

        const s=" injured in the Quota Movement, Bangladesh";
        const div= join(newInputValue3,s);
        const p=document.createElement("p");

        const now = new Date();
        const dateTimeString = `Date : ${now.toString()}`;
        p.innerText = dateTimeString;
        div.appendChild(p);
        appenChild('transection',div);


    }
    else {
        alert('Invalid input');
    }

})