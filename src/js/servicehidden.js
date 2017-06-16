var servicesTitleOne = document.querySelector('.services-title-1');
var servicesTitleTwo = document.querySelector('.services-title-2');
var servicesTitleThree = document.querySelector('.services-title-3');
var servicesTitleFour = document.querySelector('.services-title-4');

var servicesContainer1 = document.querySelector('.services-container-1');
var servicesContainer2 = document.querySelector('.services-container-2');
var servicesContainer3 = document.querySelector('.services-container-3');
var servicesContainer4 = document.querySelector('.services-container-4');

servicesTitleOne.addEventListener('click', function() {
	servicesContainer1.classList.remove('service-hidden');
	servicesContainer2.classList.add('service-hidden');
	servicesContainer3.classList.add('service-hidden')
	servicesContainer4.classList.add('service-hidden')
});

servicesTitleTwo.addEventListener('click', function() {
	servicesContainer1.classList.add('service-hidden');
	servicesContainer2.classList.remove('service-hidden');
	servicesContainer3.classList.add('service-hidden')
	servicesContainer4.classList.add('service-hidden')
});

servicesTitleThree.addEventListener('click', function() {
	servicesContainer1.classList.add('service-hidden');
	servicesContainer2.classList.add('service-hidden');
	servicesContainer3.classList.remove('service-hidden')
	servicesContainer4.classList.add('service-hidden')
});

servicesTitleFour.addEventListener('click', function() {
	servicesContainer1.classList.add('service-hidden');
	servicesContainer2.classList.add('service-hidden');
	servicesContainer3.classList.add('service-hidden')
	servicesContainer4.classList.remove('service-hidden')
});