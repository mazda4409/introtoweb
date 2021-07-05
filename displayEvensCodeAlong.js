function validateItems() {
	var inputStartingNumber = document.getElementById("inputStartingNumber").value;
	var inputEndingNumber = document.getElementById("inputEndingNumber").value;
    var inputStep = document.getElementById("inputStepNumber").value;
	if (isNaN(inputStartingNumber)) {
		alert("Error: Starting Number must be filled in with a number.");}
	else if ((inputEndingNumber=="") || (isNaN(inputEndingNumber)) || (inputEndingNumber<=inputStartingNumber)) {
		alert("Error: Starting Number must be filled in with a number.");}
	else if ((inputStep=="") || (inputStep<0) || (isNaN(inputStep))) {
		alert("Error: Starting Number must be filled in with a number.");}

	else {
		for (var i = inputStartingNumber; i < inputEndingNumber; i+=inputStep){
			if (i%2==0){return i}}}}

