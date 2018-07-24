/* CREATES THE LIGHTBOX */
$(function() {
	var fadeBackground = $(document.createElement("div")).hide().attr("id", "fade-background"),
	modalWindow = $(document.createElement("div")).hide().attr("id", "modal-window");
	$("body").append(fadeBackground, modalWindow);
	$(".modal-link").click(function(e) {
		$("#fade-background").css({ "opacity": "0.75" }).fadeIn("fast");
                var newContents = $("#" + $(this).data("modal-target")).html();
                $("#modal-window").html(newContents);
		$("#modal-window").fadeIn("fast");
		e.preventDefault();
	});
	$(document).on("click", "#fade-background", function() {
		$("#fade-background").fadeOut("fast");
		$("#modal-window").fadeOut("fast");
	});
	$(document).keypress(function(e) {
		if(e.keyCode == 27) {
			$("#fade-background").fadeOut("fast");
			$("#modal-window").fadeOut("fast");
		}
	});
});

/* VALIDATES INFORMATION IN CONTACT FORM */
document.getElementById("contact_form").addEventListener("submit", function(e) {
	e.preventDefault();
	checkForm();
});

function checkForm() {
	var name = document.getElementById("input_name").value;
	var email = document.getElementById("input_email").value;
	var subject = document.getElementById("input_subject").value;
	var comments = document.getElementById("input_comments").value;

	if (name == "") {
		alert("Please enter your name!")
	}

	if (email == "") {
		alert("Please enter your email address!")
	}

	if (subject == "") {
		alert("Please enter your subject!");
	}

	if (comments == "") {
		alert("Please enter your comments!");
	}

	if ((name != "") && (email != "") && (subject != "") && (comments != "")) {
		alert("Form submitted successfully!")
	}
}

/* JQUERY FORM TEST */
// $("#btn_submit").click(function(){
// 	var  test = "";
// 	var message = "Please enter your ";
// 	$("form input, textarea").each(function(e) {
//
//
// 		if ($(this).val() == "") {
// 			test += $(this).attr("title") + " ";
// 		}
// 		else {
// 			message = "Form submitted successfully";
// 		}
// 		// debugger;
// 	})
//
// 	console.log(message + " " + test);
// })
