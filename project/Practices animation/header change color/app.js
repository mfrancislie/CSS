const nav = document.querySelector('nav');
const header = document.querySelector('header');

const options = {

}

const observer = new IntersectionObserver(entries => {

	entries.forEach(entry => {

		if (entry.isIntersecting) {

			nav.classList.remove('changeColor');
		}else {

			nav.classList.add('changeColor');
		}

	})

}, options)

observer.observe(header)