const buttos = document.querySelectorAll('button');

buttos.forEach((button) => {
	button.addEventListener('click', ($event) => {
		console.log($event.target);
	});
});
