mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-2'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-4'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-5'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.my-text-6'));



// mdc.select.MDCSelect.attachTo(document.querySelector('.mdc-select'));
// select.listen('MDCSelect:change', () => {
// 	alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });

const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.firstbtn'));
$('#b1').on('click',function(evt){
	dialog.open();

});

$('.cancelbtn').on('click',function(evt){
	dialog.close();

});

function getName(){
	var a = document.getElementById('email').value;
	var b = document.getElementById('password').value;
	console.log("Name ===>" , a);
	console.log("Password ===>" , b);
}

const dialog1 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.secondbtn'));
$('#b2').on('click',function(evt){
	dialog1.open();

});

$('.cancelbtn').on('click',function(evt){
	dialog1.close();

});
function getName1(){
	var a = document.getElementById('fname').value;
	var b = document.getElementById('lname').value;
	var c = document.getElementById('email').value;
	var d = document.getElementById('password').value;
	console.log("Name ===>" , a);
	console.log("Password ===>" , b);
	console.log("Password ===>" , c);
	console.log("Password ===>" , d);
}









