const rellax = new Rellax('.rellax');


AOS.init();



//NAVBAR RESPONSIVA --> 


class MobileNavbar {
    constructor(mobile_Menu, container_nav, navOptions) {
        this.mobileMenu = document.querySelector(mobile_Menu);
        this.navList = document.querySelector(container_nav);
        this.navLinks = document.querySelectorAll('.nav_options');
      
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
  
  
  
  handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
   
    this.animateLinks();
  }
  
  animateLinks() {
  this.navLinks.forEach((link, index) => {
  link.style.animation
  ? (link.style.animation = "")
  : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`);
  });
  }
  
  
  
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navList.addEventListener("click", this.handleClick);
    }
   
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
  
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile_Menu",
    ".container_nav",
    ".nav_options",
  );
  
  
  
  
  mobileNavbar.init(); 
  
  

  //NAVBAR RESPONSIVA --> 



//animation begin typing//

const type = (element) => {
  const text = "ASSESSORIA"
  text.split("")
  .forEach((letter, index) => {
    setTimeout(() => element.innerHTML += letter, 100* index)
  })
};


addEventListener("load", type(document.querySelector("#titleGD")));

// end animation begin typing //





  //nav color change -->

  const menu = document.querySelector('header');

  function activeScroll(){
    menu.classList.toggle('active', scrollY > 0);
  }

  window.addEventListener('scroll', activeScroll)

//nav color change -->



//SCROLL SUAVE -->

  $(document).ready(function(){

    

    $("a").on('click', function(event) {
  
      
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
        
        var hash = this.hash;
  
        
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          
          window.location.hash = hash;
        });
      } 
    });
  });
  
  //SCROLL SUAVE -->



   //number input -->
  function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value;

    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; 

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-';}
 //number input -->