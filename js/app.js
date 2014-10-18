var spaceFrag = '<div class="space" contenteditable="false"><a href="#" class="add_img">Add image</a></div>';

$(document).ready(function(){


	//function for turning [img] into spaces
	$('body').keypress(function(){
		$("p:contains('[img]')").replaceWith(spaceFrag);
	});

	//add the img to the space
	$(document).on('click', '.add_img', function(e){
		e.preventDefault();
		$(this).parent().html("<div class='img_container'><div class='img_layout'><a class='img_vert' href='#'>||</a>&nbsp;<a class='img_horiz' href='#'>=</a></div><img src='img/image.jpg'/></div>");
		return false;
	});

	$(document).on('click', '.img_vert', function(e){
		e.preventDefault();
		var h = $(this).closest('.img_container').height();
		$(this).closest('.img_container').css({
			"width": "50%",
			"float": "left"
		});
		$(this).closest('.space').append("<div class='img_container' style='width:50%; float:left;'><div class='img_layout'><a class='img_vert' href='#'>||</a>&nbsp;<a class='img_horiz' href='#'>=</a></div><img src='img/image.jpg'/></div>");
	});

	$(document).on('click', '.img_horiz', function(e){
		e.preventDefault();
		$(this).closest('.space').append("<div class='img_container' style='width:100%; float:left;'><div class='img_layout'><a class='img_vert' href='#'>||</a>&nbsp;<a class='img_horiz' href='#'>=</a></div><img src='img/image.jpg'/></div>");
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
