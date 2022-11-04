console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!');
}
function complimentMouseover(event) {
	event.preventDefault();

	alert('You are special!')
}

let image = document.querySelector('#image');
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', complimentMouseover)


