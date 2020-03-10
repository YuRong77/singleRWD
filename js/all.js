$(document).ready(function(){
    $('.showmenu').on('click',function(e){
        e.preventDefault();
        $('.nav').toggleClass('menushow')
    });
    $('.jsmove').on('click',function(e){
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html, body').stop().animate({scrollTop: targetPos}, 800);
    });


window.addEventListener('scroll', checkSlide);
function checkSlide(){
    if(window.scrollY>0){document.querySelector('.header').classList.add('headerbg');}
    else{document.querySelector('.header').classList.remove('headerbg');}
    let about=$('#about').offset().top;
    let process=$('#process').offset().top;
    if(window.scrollY>(about-550)){document.querySelector('.nicteam').classList.add('showanimate');}
    if(window.scrollY>(about-300)){document.querySelector('.team').classList.add('showanimate');}
    if(window.scrollY>(process-600)){document.querySelector('.process').classList.add('showanimate');}
    }

});