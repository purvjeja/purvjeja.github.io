let allData = {};

const getAllData = async () => {
	const dataItem = await fetch("https://api.jsonbin.io/v3/b/648b26c08e4aa6225eaed753", {
		headers: { "X-Master-Key": "$2b$10$36wvnzpKZqVs9l1ZsHS2jON.JWV9pBcgmU98Oce5jnCYheagDHuyq" },
	}).then((res) => res.json());

	allData = dataItem.record;
};

const postAllData = async () => {
	const responseData = await fetch("https://api.jsonbin.io/v3/b/648b26c08e4aa6225eaed753", {
		method: "PUT",
		headers: { "X-Master-Key": "$2b$10$36wvnzpKZqVs9l1ZsHS2jON.JWV9pBcgmU98Oce5jnCYheagDHuyq", "Content-Type": "application/json" },
		body: JSON.stringify(allData),
	}).then((res) => res.json());

	allData = responseData.record;
};

const addData = async () => {
	const [km, amt, fprice] = [document.getElementById("kms").value, document.getElementById("price").value, document.getElementById("fuelRate").value];
	const currentVehicleData = allData[localStorage.getItem("myVehicle")];

	const prepareObject = {
		id: currentVehicleData.length,
		date: new Date().toDateString(),
		km: Number(km),
		amountFor: Number(amt),
		rate: Number(fprice),
	};

	["kms", "price", "fuelRate"].map((item) => (document.getElementById(item).value = ""));

	currentVehicleData.push(prepareObject);
	addElement(prepareObject);

	postAllData(allData);
	updateStatsWithData(currentVehicleData);
};

const addElement = (prepareObject) => {
	document.getElementById("tableElement").insertAdjacentHTML(
		"beforeend",
		`
    <tr class="tr">
        <td class='td'>${prepareObject.date}</td>  
        <td class='td'>${prepareObject.km}</td>
        <td class='td'>${prepareObject.amountFor}</td>
        <td class='td'>${prepareObject.rate}</td>
    </tr>`,
	);
};

const callExistingData = async () => {
	const vehicleNumber = localStorage.getItem("myVehicle");

	if (!vehicleNumber) {
		const userVehicleNum = prompt("Please enter your vehicle number!");

		if (userVehicleNum && userVehicleNum.length > 0) {
			localStorage.setItem("myVehicle", userVehicleNum);
		}

		callExistingData();
	} else {
		await getAllData();

		if (!allData.hasOwnProperty(localStorage.getItem("myVehicle"))) {
			allData[localStorage.getItem("myVehicle")] = [];
			await postAllData();
			confirm(
				"Hey you, hope you enjoy this web app, Now mileage calculation got easy, Whenever you go to fuel up your vehicle, add three data for stats - Current Kms, Fuel up amount and current market fuel price.",
			);
			confirm("and also, you need to have atleast two data for calculation of mileage, Thank you :)");
		}

		document.getElementById("vehicleNumber").innerText = vehicleNumber;

		const data = allData[localStorage.getItem("myVehicle")];

		allData.hasOwnProperty(localStorage.getItem("myVehicle")) ? updateTableWithData(data) : null;

		allData.hasOwnProperty(localStorage.getItem("myVehicle")) ? updateStatsWithData(data) : null;
	}
};

const updateTableWithData = (data) => {
	document.getElementById("tableElement").innerHTML = `<tr class="tr"><th>Date</th><th>Kilo Meters</th><th>Amount</th><th>Fuel Price</th></tr>`;
	data.map((stat) => addElement(stat));
};

const updateStatsWithData = (dataItem) => {
	let [totalPrice, totalFuelPrice, ftp, ftfp] = [0, 0, 0, 0];

	dataItem?.map((data, index) => {
		if (index !== dataItem.length - 1) {
			totalPrice += data["amountFor"];
			totalFuelPrice += data["rate"];
		}
		ftp += data["amountFor"];
		ftfp += data["rate"];
	});

	const finalKm = dataItem[dataItem.length - 1]["km"] - dataItem[0]["km"];
	const finalFuelPrice = totalFuelPrice / (dataItem.length - 1);
	const finalAmount = totalPrice;
	const petrolFilled = finalAmount / finalFuelPrice;
	const mileage = finalKm / petrolFilled;

	document.getElementById("nextFuelKm").innerText = parseInt(
		dataItem[dataItem.length - 1]["km"] + (dataItem[dataItem.length - 1]["amountFor"] / dataItem[dataItem.length - 1]["rate"]) * mileage,
	);

	document.getElementById("mileage").innerText = (Math.round(mileage * 100) / 100).toFixed(2);
	document.getElementById("totalkms").innerText = finalKm;
	document.getElementById("totalamount").innerText = ftp;
	document.getElementById("avgfuelprice").innerText = (Math.round((ftfp / dataItem.length) * 100) / 100).toFixed(2);
	document.getElementById("petrolFilled").innerText = (Math.round(petrolFilled * 100) / 100).toFixed(2);
};
