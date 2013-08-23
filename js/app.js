var editing = false;
var spaceFrag = '<div class="space" contenteditable="false"><a href="#" class="add_img">Add image</a></div>';

$(document).ready(function(){
	$('#mode').on("click", function(){
		if(editing == false){
			editing = true;
			editMode();
			alert(editing);
		} else {
			editing = false;
			editMode();
			alert(editing);
		}
	});

	//function for turning [img] into spaces
	$('body').keypress(function(){
		$("p:contains('[img]')").replaceWith(spaceFrag);
		// $("p:contains('#')").parent().html
	});

	$(document).on('click', '.add_img', function(){
		$(this).parent().html("<img src='img/image.jpg'/>");
		$(this).parent().addClass("filled");
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