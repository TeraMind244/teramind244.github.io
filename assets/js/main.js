jQuery(document).ready(function ($) {
	/*======= Skillset *=======*/

	$(".level-bar-inner").css("width", "0");

	$(window).on("load", function () {
		const isPrinting = window.location.search === "?print";

		$(".level-bar-inner").each(function () {
			var itemWidth = $(this).data("level");

			$(this).animate(
				{
					width: itemWidth,
				},
				isPrinting ? 0 : 1000
			);
		});
	});
});
