$(document).ready(function(){
	$(".btn").click(function(){
		if (($("#fn").val() == '') ||($("#ln").val() == ''))
		{
			alert("Please fill all the fields");
		};
	});
});