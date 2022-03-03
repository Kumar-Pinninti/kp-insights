console.log("welcome");

// declaring

// let intro = document.querySelector('.intro');
// //let logo = document.querySelector('.logo-header');
// let logoSpan = document.querySelectorAll('.logo-span');

// let btn = document.querySelector('.btn');

// window.addEventListener('DOMContentLoaded', () => {

//     setTimeout(() => {
        
//         logoSpan.forEach((span, idx) => {

//             setTimeout(() => {
//                 span.classList.add('active');
//             }, (idx + 1) * 100 );

//         });

//         setTimeout(() => {
        
//             logoSpan.forEach((span, idx) => {
    
//                 setTimeout(() => {
//                     span.classList.remove('active');
//                     span.classList.add('fade')
//                 }, (idx + 1) * 50 );

//             });
    
    
//         }, 2000);

//         setTimeout(() => {
//             intro.style.top = '-100vh'
//         }, 2300);


//     });

// });

// button directional hover effects

// btn.onmousemove = function (event){
//     const x = event.pageX - btn.offsetLeft;
//     const y = event.pageY - btn.offsetTop;

//     btn.style.setProperty('--x', x + 'px')
//     btn.style.setProperty('--y', y + 'px')
// 



// night mode

let dayNight = document.querySelector('.heading')
let body = document.querySelector('body')

dayNight.onclick = function (){
    body.classList.toggle('dark');
    dayNight.classList.toggle('active')
}


//nav bar

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//showing menu 

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

//removing menu with close button
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

//closing nav menu when links are used

const navLinks = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}
navLinks.forEach(navlink => {
    navlink.addEventListener('click', linkAction);
})

// NAV BAR SELECTED SECTION

let section = document.querySelectorAll('section');
let selectedLinks = document.querySelectorAll('.navigation ul li a');

window.onscroll = () => {

    // to change navbar links active according selected section
    
    section.forEach(sec => {

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            selectedLinks.forEach(links => {

                links.classList.remove('active');
                document.querySelector('.navigation ul li a[href*='+id+']').classList.add('active');
            });
        }
    });
}




// above new code

// about


const profileImage = document.querySelector('.about-me-profile');

    profileImage.onclick = function(){
        profileImage.classList.toggle('active')
    }

    profileImage.onmouseout = function(){
        profileImage.classList.remove('active')
    }


// declaring


// skills

const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');


function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close';
    }
    if(itemClass == 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})





// qualification - tabs

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active');
        });
        target.classList.add('qualification-active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active');
        });
        tab.classList.add('qualification-active');

    })
})


// more projects scripting

let spans = document.querySelectorAll('.span');
let cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.onmouseenter = function (e) {

        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;

        spans.forEach(span => {
            span.style.setProperty('--x', x + 'px');
            span.style.setProperty('--y', y + 'px');
        })

    }

    card.onmouseout = (e) => {

        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;

        spans.forEach(span => {
            span.style.setProperty('--x', x + 'px');
            span.style.setProperty('--y', y + 'px');
        })
    }
    
})