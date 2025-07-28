"use strict";

// Обработчик клика
document.addEventListener("click", handleClick);

function handleClick(e) {
    const targetElement = e.target;

    // Проверка, если клик был по бургер-меню
    if (targetElement.closest('.header__burger')) {
        // Переключаем класс burger-open
        document.body.classList.toggle('burger-open');
        // Добавляем или удаляем класс для блокировки прокрутки
        document.body.classList.toggle('no-scroll');
    }
}



// SLIDER TESTIMONIALS

const testimonialsSlider = document.querySelector('.testimonials');

if(testimonialsSlider) {

	const swiper = new Swiper('.testimonials__container', {
		loop: true,
		autoHeight: true,
		speed: 1000,
		
	
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	
		// navigation: {
		//   nextEl: '.hero__arrow--next',
		//   prevEl: '.hero__arrow--prev',
		// },
	});

}


// TABS

document.addEventListener("click", tabsClick);

function tabsClick(e) {
    const targetElement = e.target;
    
    if (targetElement.closest('[data-tabs-button]')) {
        const currentElement = targetElement.closest('[data-tabs-button]');
        setTab(currentElement);
    }
}

function setTab(tabElement) {
    const TabsParent = tabElement.closest('[data-tabs]');
    if (!TabsParent) return;

    const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
    const tabsActiveButton = TabsParent.querySelector('[data-tabs-button].active');

    if (tabsActiveButton) {
        tabsActiveButton.classList.remove('active');
    }

    tabElement.classList.add('active');
    const currentButtonIndex = tabsButtons.indexOf(tabElement);

    const tabsElements = TabsParent.querySelectorAll('[data-tabs-element]');

    tabsElements.forEach(tabElement => {
        tabElement.hidden = true;
    });

    if (tabsElements[currentButtonIndex]) {
        tabsElements[currentButtonIndex].hidden = false;
    }
}


// ЭФФЕКТ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
document.addEventListener('DOMContentLoaded', isInViewport);

// Функция для проверки видимости элемента
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		 rect.top <= window.innerHeight &&
		 rect.bottom >= 0
	);
}

// Обработчик для скролла
function handleScroll() {
	const hiddenElements = document.querySelectorAll('.hidden');
	hiddenElements.forEach(element => {
		 if (isInViewport(element)) {
			  element.classList.add('visible'); // Добавляем класс для анимации
			  element.classList.remove('hidden'); // Убираем "скрытость"
		 }
	});
}

// Привязываем обработчик к событию scroll
window.addEventListener('scroll', handleScroll);

// Инициализация: вызываем handleScroll, чтобы проверить элементы, уже видимые на экране
handleScroll();