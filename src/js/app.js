import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};






// Бургер

const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
const drop = document.querySelector('.drop1');
const dropdown = document.querySelector('.drop-down1');
if (drop) {
    
    drop.addEventListener("click", function (e) {
        drop.classList.toggle('_active');
        dropdown.classList.toggle('_active');
    })
}

// Анимация
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }

    setTimeout(() => {
        animOnScroll();
    }, 500);
}


// Модальное окно

const ModalBtns = document.querySelectorAll('.modal-btn');
const Modal = document.querySelector('.modal');

if (ModalBtns.length > 0) {
    ModalBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            btn.classList.toggle('_active');
            Modal.classList.toggle('_active');
        });
    });
}





document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.item-tab');
    const nextButtons = document.querySelectorAll('.button-next');
    const prevButtons = document.querySelectorAll('.button-prev');
    let currentTab = 0;

    function showTab(index) {
        tabs.forEach((tab, i) => {
            tab.style.display = i === index ? 'flex' : 'none';
        });
    }

    function nextTab() {
        if (currentTab < tabs.length - 1) {
            currentTab++;
            showTab(currentTab);
        }
    }

    function prevTab() {
        if (currentTab > 0) {
            currentTab--;
            showTab(currentTab);
        }
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            nextTab();
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            prevTab();
        });
    });

    showTab(currentTab);
});