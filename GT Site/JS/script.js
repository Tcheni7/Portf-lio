// ======================================
// MENU MOBILE
// ======================================

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");


if(menuToggle && menu){

    menuToggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}



// ======================================
// FECHAR MENU AO CLICAR NOS LINKS
// ======================================

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});




// ======================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ======================================


const animatedElements = document.querySelectorAll(
".service-card, .portfolio-card, .process-item, .about-content"
);



function reveal(){

    animatedElements.forEach(element=>{


        const position = 
        element.getBoundingClientRect().top;


        const screenPosition =
        window.innerHeight - 100;



        if(position < screenPosition){

            element.classList.add("show");

        }


    });


}



window.addEventListener("scroll", reveal);


reveal();




// ======================================
// ANO AUTOMÁTICO NO FOOTER
// ======================================


const footerYear = document.querySelector(".footer-bottom p");


if(footerYear){

    footerYear.innerHTML =
    `© ${new Date().getFullYear()} Geremias Chendecumbi. Todos os direitos reservados.`;

}