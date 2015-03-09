var onDeviceReady = function () {
    //do something with codovar here. for example: show an splashscreen here
};

document.addEventListener('deviceready', this.onDeviceReady, false);
var bmi;
$(document).on("pageshow", "#index", function () {
	$("#btnCalc").on('tap', function (event) {
		event.preventDefault();
		var height = $("#height").val();
		var weight = $("#weight").val();
		height = height/100;
		bmi = weight / (height * height);
		alert("Your BMI is: " + bmi.toPrecision(4));
	});

	$("#btnClear").on('tap', function (event) {
		event.preventDefault();
		$("#height").val("");
		$("#weight").val("");
	});
});
