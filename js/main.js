/* CREATES THE LIGHTBOX */
$(document).ready(function() {
	var fadeBackground = $(document.createElement("div")).hide().attr("id", "fade-background"),
	modalWindow = $(document.createElement("div")).hide().attr("id", "modal-window");
	$(document.body).append(fadeBackground, modalWindow);
	$(document).on("click", ".modal-link", function(e) {
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
	var alert_message = "Please provide the following information: ";

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
