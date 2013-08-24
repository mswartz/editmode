var spaceFrag = '<div class="space" contenteditable="false"><a href="#" class="add_img">Add image</a></div>';

$(document).ready(function(){


	//function for turning [img] into spaces
	$('body').keypress(function(){
		$("p:contains('[img]')").replaceWith(spaceFrag);
	});

	//add the img to the space
	$(document).on('click', '.add_img', function(){
		$(this).parent().html("<div class='img_container'><div class='img_layout'></div><img src='img/image.jpg'/></div>");
	});

	$(document).on('click', '.img_layout', function(){
		$(this).parent().css({
			"width": "50%",
			"float": "left"
		});
		$(this).closest('.space').append("<div class='img_container' style='width:50%; float:left;'><div class='img_layout'></div><img src='img/image.jpg'/></div>");
	});

});

function dragIt(e){
	$('.place').addClass("show");
}

function dropIt(e){
	var $target = $(e.target);
	$target.replaceWith(spaceFrag);
}

function dragStop(){
	$('.place').removeClass("show");
}