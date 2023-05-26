"use strict"
document.addEventListener('DOMContentLoaded', function () {
  //BURGER 
  let burger = this.querySelector('.header__burger');
  let header = this.querySelector('.header');
  let nav = this.querySelector('.header__nav ul');
  let navLinks = this.querySelectorAll('.header__nav a');
  let body = this.querySelector('body');
  let logo = this.querySelector('.header__logo');
  let socials = this.querySelector('.header__socials');

  burger.addEventListener('click', function () {
    burger.classList.toggle('_active')
    nav.classList.toggle('_active')
    body.classList.toggle('_overflow')
    socials.classList.toggle('_active')
  })
  navLinks.forEach(element => {
    element.addEventListener('click', function () {
      burger.classList.remove('_active')
      nav.classList.remove('_active')
      body.classList.remove('_overflow')
      socials.classList.remove('_active')
    })
  });
  logo.addEventListener('click', function () {
    burger.classList.remove('_active')
    nav.classList.remove('_active')
    body.classList.remove('_overflow')
    socials.classList.remove('_active')
  })
  socials.addEventListener('click', function () {
    burger.classList.remove('_active')
    nav.classList.remove('_active')
    body.classList.remove('_overflow')
    socials.classList.remove('_active')
  })

  //STICKY HEADER
  this.addEventListener('scroll', function () {
    if (window.pageYOffset > 600) {
      header.classList.add('_fixed');
    } else {
      header.classList.remove('_fixed');
    }
  })

  //HEADER SCROLL
  let scrollDir = 0;
  this.addEventListener('scroll', function () {
    if (window.pageYOffset > 600) {
      if (scrollDir < window.pageYOffset) {
        scrollDir = window.pageYOffset;
        header.style.display = 'block';
      } else if (scrollDir > window.pageYOffset + 200) {
        scrollDir = window.pageYOffset;
        header.style.display = 'none';
      }
    } else {
      header.style.display = 'block';
    }
  })

  //WOW
  let wow = new WOW().init();
})