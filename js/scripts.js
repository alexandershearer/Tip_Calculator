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


    
    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("tip").innerText = tipPerPerson;

}




document.getElementById("calculateTip").onclick = function () {
    calculateTip();
}