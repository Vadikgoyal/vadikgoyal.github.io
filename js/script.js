burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
loader = document.querySelector('preloader')

burger.addEventListener('click', ()=>{
	rightNav.classList.toggle('v-class')
	navList.classList.toggle('v-class')
	navbar.classList.toggle('h-nav')
})

var loader = document.getElementById('preloader')

window.addEventListener("load", function(){
	loader.style.display = "none";
	})