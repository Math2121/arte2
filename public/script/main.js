// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.header-sticky').addClass('sticky');
    } else {
        $('.header-sticky').removeClass('sticky');
    }
});

// Accordion
const acc = document.getElementsByClassName('accordion')
const content = document.getElementsByClassName('content')
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click",()=>{
        content[i].classList.toggle("active")
    })

}

const acc2 = document.getElementsByClassName('accordion2')
const content2 = document.getElementsByClassName('content2')
for (let i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click",()=>{
        content2[i].classList.toggle("active")
    })

}

