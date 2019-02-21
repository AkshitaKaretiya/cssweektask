$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.drop_down')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('.search_btn').click(function(){
		var input_value = document.getElementById("search").value;
    console.log(input_value);
		if(input_value.length > 0){
			$('.success-alt').toggle();
		}else{
			$('.danger-alt').toggle();
		}
	});
});

$(document).ready(function(){
    $('.tab-pane').mouseenter(function () {
  	var demo_height = $(this).find('.image_box').height();
  	var image_height = $(this).find('.image_container > img').height() - demo_height;
  	if (image_height > 0) {
  		$(this).find('.image_container').css('top', -(image_height));
  	} else {
  		$(this).find('.image_container').css('top', 0);
  	}
  });
  $('.tab-pane').mouseleave(function () {
  	$('.image_container').css('top', 0);
  });  
});

