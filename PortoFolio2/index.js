const header = document.querySelector("header");

window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
let Cols = document.querySelectorAll(".col");
let Rows = document.querySelectorAll(".row");
let wraps = document.querySelectorAll(".wrap");










menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    m=navlist.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr = ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true
})

sr.reveal('.home-text',{delay:350,origin:'left'})
sr.reveal('.home-img',{delay:350,origin:'right'})
sr.reveal('.sub-service,.about,.portofolio,.services,.cta,.contact',{delay:200,origin:'bottom'})

Cols.forEach((col) =>{
    sr.reveal('.col',{delay:200,origin:'bottom'})
});

Rows.forEach((row) =>{
    sr.reveal('.row',{delay:250,origin:'left'})
});

wraps.forEach((wrap) =>{
    sr.reveal('.wrap',{delay:250,origin:'right'})                
});


const text = document.querySelector(".sec-text")

    const textLoad = () =>{
        setTimeout(() =>{
            text.textContent = "Web Developer"
        },0);
        setTimeout(() =>{
            text.textContent = "Web Designer"
        },3000);
        setTimeout(() =>{
            text.textContent = "Freelancer"
        },6000);
    }
textLoad();
setInterval(textLoad,9000);