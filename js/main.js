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
