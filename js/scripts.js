function calculateTip() {
    var billAmount = document.getElementById("billAmt").value;
    console.log(billAmount);

    var serviceQuality = document.getElementById("serviceQual").value
    console.log(serviceQuality);

    var numberOfPeople = document.getElementById("numPeople").value;
    console.log(numberOfPeople);



    var amount = Number(billAmount);

    if (isNaN(amount || amount <= 0)) {
        alert("Invalid unput for bill amount.");
        return;
    }


    var service = Number(serviceQuality);

    if (service === 0) {
        alert("You must pick an option for service quality.");
        return;
    }


    var people = Number(numberOfPeople);

    if (isNaN(people) || people < 1) {
        alert("Enter a valid number of people splitting the bill.");
        return;
    }

    var tipPerPerson = (amount * service) / people;

    tipPerPerson = tipPerPerson.toFixed(2);

    var pricePerMeal = amount / numberOfPeople;



    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("pricePerMeal").innerText = pricePerMeal;
    document.getElementById("tip").innerText = tipPerPerson;

}

function reset() {
    document.getElementById("billAmt").value = "";
    document.getElementById("serviceQual").value = 0;
    document.getElementById("numPeople").value = "";
    document.getElementById("tipAmount").style.display = "none";
    document.getElementById("tip").innerText = "0.00";
}




document.getElementById("calculateTip").onclick = function () {
    calculateTip();
}

document.getElementById("reset").onclick = function () {
    reset();
}