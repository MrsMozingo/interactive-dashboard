document.getElementById("convert-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let amount = document.getElementById("amount").value;
    amount = parseFloat(amount);

    const conversionList = document.getElementsByTagName("select")[0];
    const selectedIndex = conversionList.selectedIndex;
    const conversionType = conversionList.options[selectedIndex].text.toLowerCase();

    let conversionResult;
    let resultText;

    if (conversionType === "inches to centimeters") {
        conversionResult = amount * 2.54;
        resultText = amount + " inches is " + conversionResult.toFixed(2) + " centimeters";

    } else if (conversionType === "feet to centimeters") {
        conversionResult = amount * 30.48;
        resultText = amount + " feet is " + conversionResult.toFixed(2) + " centimeters";

    } else if (conversionType === "yards to meters") {
        conversionResult = amount * 0.91;
        resultText = amount + " yards is " + conversionResult.toFixed(2) + " meters";

    } else if (conversionType === "miles to kilometers") {
        conversionResult = amount * 1.61;
        resultText = amount + " miles is " + conversionResult.toFixed(2) + " kilometers";

    } else if (conversionType === "centimeters to inches") {
        conversionResult = amount * 0.39;
        resultText = amount + " centimeters is " + conversionResult.toFixed(2) + " inches";

    } else if (conversionType === "centimeters to feet") {
        conversionResult = amount * 0.0328;
        resultText = amount + " centimeters is " + conversionResult.toFixed(2) + " feet";

    } else if (conversionType === "meters to yards") {
        conversionResult = amount * 1.09;
        resultText = amount + " meters is " + conversionResult.toFixed(2) + " yards";

    } else if (conversionType === "kilometers to miles") {
        conversionResult = amount * 0.62;
        resultText = amount + " kilometers is " + conversionResult.toFixed(2) + " miles";

    } else {
        resultText = "Invalid conversion selection";
    }

    document.getElementById("result").innerHTML = resultText;
});