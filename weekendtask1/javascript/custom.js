
// mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));
// select.listen('MDCSelect:change', () => {
// 	alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });



// const select = new MDCSelect(document.querySelector('.mdc-select'));

// select.listen('MDCSelect:change', () => {
//   alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });

$(document).ready(function(){
	$('.slider').slick({
		
		autoplay: true,
		autoplaySpeed: 2000,
		// dots: true,
		prevArrow: '<button type="button" class="slick-prev" data-role="none"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next" data-role="none"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});

})