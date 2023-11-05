const navbar=document.querySelector('.navbar');
navbar.style.maxHeight="0px";

const signinLink=document.querySelector('#signin');
const changeNavbar=()=>
{
    if(localStorage.getItem('email'))
    {
        console.log("found");
        signinLink.innerHTML=`<a href="#" id="signoutBtn" onClick=signout() >Signout</a>`
    }
    else
    {
        signinLink.innerHTML=`<a href="./login.html">Login/Register</a>`
    }
    
}
changeNavbar();


const signout=()=>
{
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    console.log("signed out");
    changeNavbar();
    alert('Signout successfully');
    window.location.href="https://bikram-foodempire.netlify.app/";
}


// Swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

// Hamburger menu

function toggle(){
if(navbar.style.maxHeight=="0px"){
    navbar.style.maxHeight="530px";
    }
else{
    navbar.style.maxHeight="0px";
    }
}