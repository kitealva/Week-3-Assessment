console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted!")
}

function duckPicture(evt) {
	evt.preventDefault()
	alert('You are cute!')
}

let form = document.querySelector('#contact');
let pic = document.querySelector('img')


form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', duckPicture)