let allData = [];

const addData = async () => {
    const [km, amt, fprice] = [document.getElementById('kms').value, document.getElementById('price').value, document.getElementById('fuelRate').value];
    const prepareObject = {
        'id': allData.length,
        'date': new Date().toDateString(),
        'km': Number(km),
        'amountFor': Number(amt),
        'rate': Number(fprice)
    };
    ['kms', 'price', 'fuelRate'].map(item => document.getElementById(item).value = '');

    allData.push(prepareObject);
    addElement(prepareObject);

    const data = await fetch('https://api.jsonbin.io/v3/b/648b26c08e4aa6225eaed753', {
        method: "PUT",
        headers: { "X-Master-Key": "$2b$10$36wvnzpKZqVs9l1ZsHS2jON.JWV9pBcgmU98Oce5jnCYheagDHuyq", "Content-Type": "application/json" },
        body: JSON.stringify({ [`${localStorage.getItem('myVehicle')}`]: allData})  
    }).then(res => res.json());

    (allData.length) ? updateStats() : null;
}

const addElement = (prepareObject) => { 
    document.getElementById('tableElement').insertAdjacentHTML('beforeend', `
    <tr class="tr">
        <td class='td'>${prepareObject.date}</td>  
        <td class='td'>${(prepareObject.km)}</td>
        <td class='td'>${prepareObject.amountFor}</td>
        <td class='td'>${prepareObject.rate}</td>
    </tr>`);
}

const callExistingData = async () => {
    const vehicleNumber = localStorage.getItem('myVehicle');

    if(!vehicleNumber) {
        const userVehicleNum = prompt('Please enter your vehicle number!');
        if( userVehicleNum && userVehicleNum.length > 0 ) {
            localStorage.setItem('myVehicle', userVehicleNum);
        }
        else callExistingData();
    } 
    else {
        const dataItem = await fetch('https://api.jsonbin.io/v3/b/648b26c08e4aa6225eaed753', {
            headers: { "X-Master-Key": "$2b$10$36wvnzpKZqVs9l1ZsHS2jON.JWV9pBcgmU98Oce5jnCYheagDHuyq"}      
        }).then(res => res.json());

        allData = dataItem.record[vehicleNumber];

        (allData.length) ? updateTableWithAllData() : null;

        (allData.length) ? updateStats() : null;
    }
}

const updateTableWithAllData = () => {
    document.getElementById('tableElement').innerHTML = '';

    document.getElementById('tableElement').innerHTML = `<tr class="tr"><th>Date</th><th>Kilo Meters</th><th>Amount</th><th>Fuel Price</th></tr>`;
    allData.map(stat => addElement(stat));
} 

const updateStats = () => {
    let [totalPrice, totalFuelPrice] = [0, 0];

    if(allData) allData.map((data, index) => {
        if(index !== allData.length - 1) {
            totalPrice += data['amountFor'];
            totalFuelPrice += data['rate'];
        }
    });

    const finalKm = allData[allData.length - 1]['km'] - allData[0]['km'];
    const finalFuelPrice = totalFuelPrice/(allData.length - 1);
    const finalAmount = totalPrice;
    const mileage = finalKm/(finalAmount/finalFuelPrice);

    document.getElementById('mileage').innerText = (Math.round(mileage * 100) / 100).toFixed(2);;
    document.getElementById('totalkms').innerText = finalKm;
    document.getElementById('totalamount').innerText = finalAmount;
    document.getElementById('avgfuelprice').innerText = (Math.round(finalFuelPrice * 100) / 100).toFixed(2);;
}