

const mobileMenu = document.querySelector('#mobile-menu');
const burger = document.querySelector('#burger');
const closeMenu = document.querySelector('#close-menu');
const wrapper = document.getElementById('wrapper');

const menuAction = () => {
  if (mobileMenu.classList.contains('show')) {
    burger.classList.add('hidden')
    closeMenu.classList.remove('hidden')
    wrapper.classList.add('no-scroll');
  } else {
    burger.classList.remove('hidden');
    closeMenu.classList.add('hidden');
    wrapper.classList.remove('no-scroll')
  }
}

burger.addEventListener('click', () => {
  mobileMenu.classList.add('show')
  menuAction();
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  menuAction();
});

/** Search Bar Logic **/

const searchBar = document.querySelector('#nav-search');
const navLogo = document.querySelector('#nav-logo');
const searchIcon = document.querySelector('#nav-searchIcon');

searchIcon.addEventListener('click', () => {

  if (searchBar.classList.contains('hidden')) {
    wrapper.classList.add('no-scroll');
    searchBar.classList.replace('hidden', 'flex');
    navLogo.classList.replace('flex', 'hidden')
  } else {
    wrapper.classList.remove('no-scroll');
    searchBar.classList.replace('flex', 'hidden');
    navLogo.classList.replace('hidden', 'flex');
  }
})

/** Navbar scroll action **/