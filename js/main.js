
// HEADER START 

let elopenBurger = document.getElementById('burgerBtn');

let elhideContent = document.getElementById('hideList');

let elxicon = document.getElementById('header__burger__icon');

elopenBurger.addEventListener('click', function(){
  elhideContent.classList.toggle('show');
})

let count = 0;

elopenBurger.addEventListener('click', function(){
  if (count == 0){
    elxicon.className='bx bx-x';
    count = 1;
  }
  else{
    elxicon.className = 'bx bx-menu';
    count = 0;
  }
})

// HEADER END 

// HERO START 

let elsettingbtn = document.getElementById('settingBtn');
let elsettincontent = document.getElementById('settingContent');
let elfirstcolor = document.getElementById('btnFirst');
let elsecondcolor = document.getElementById('btnsecond');
let elthirdcolor = document.getElementById('btnthird');
let elfourthcolor = document.getElementById('btnfourth');
let elfifthcolor = document.getElementById('btnfifth');
let elsixthcolor = document.getElementById('btnsixth');
let elseventhcolor = document.getElementById('btnseventh');
let eleightcolor = document.getElementById('btneight');
let elninecolor = document.getElementById('btnnine');
let eltencolor = document.getElementById('btnten');
let elelevencolor = document.getElementById('btneleven');
let eltwelvecolor = document.getElementById('btntwelve');




elsettingbtn.addEventListener('click', function(){
  elsettincontent.classList.toggle('display');
})
elsettingbtn.addEventListener('click', function(){
  elsettingbtn.classList.toggle('float');
})

elfirstcolor.addEventListener('click', function(){
 document.body.classList.add('first-btn');
 document.body.classList.remove('second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
})  

elsecondcolor.addEventListener('click', function(){
  document.body.classList.add('second-btn');
  document.body.classList.remove('first-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')

 })

 elthirdcolor.addEventListener('click', function(){
  document.body.classList.add('third-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 elfourthcolor.addEventListener('click', function(){
  document.body.classList.add('fourth-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 elfifthcolor.addEventListener('click', function(){
  document.body.classList.add('fifth-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 elsixthcolor.addEventListener('click', function(){
  document.body.classList.add('sixth-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 elseventhcolor.addEventListener('click', function(){
  document.body.classList.add('seventh-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 eleightcolor.addEventListener('click', function(){
  document.body.classList.add('eight-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'nine-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 elninecolor.addEventListener('click', function(){
  document.body.classList.add('nine-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'ten-btn', 'eleven-btn', 'twelve-btn')
 })

 eltencolor.addEventListener('click', function(){
  document.body.classList.add('ten-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'eleven-btn', 'twelve-btn')
 })

 elelevencolor.addEventListener('click', function(){
  document.body.classList.add('eleven-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'twelve-btn')
 })

 eltwelvecolor.addEventListener('click', function(){
  document.body.classList.add('twelve-btn');
  document.body.classList.remove('first-btn', 'second-btn', 'third-btn', 'fourth-btn', 'fifth-btn', 'sixth-btn', 'seventh-btn', 'eight-btn', 'nine-btn', 'ten-btn', 'eleven-btn')
 })



// SCROLL PART 

window.addEventListener('scroll', function(){
  let header = this.document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active',windowPosition);
})

// SCROLL END 

ScrollReveal().reveal('.about', { delay: 400 });
ScrollReveal().reveal('.skills', { delay: 400 });
ScrollReveal().reveal('.portfolio', { delay: 400 });
ScrollReveal().reveal('.service', { delay: 400 });
ScrollReveal().reveal('.resume', { delay: 400 });
ScrollReveal().reveal('.blog', { delay: 400 });
ScrollReveal().reveal('.contact', { delay: 400 });
ScrollReveal().reveal('.footer', { delay: 400 });

