
searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{

searchform.classlist.toggle('active');

}

let loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = ()=>{

    loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = ()=>{

    loginform.classList.remove('active');
}




Window.onscroll = ()=>{
    searchform.classlist.remove('active');
  if(window.scrollY > 80){

    Document.querySelector('.header .header-2').classlist.add('active');
  }
  else{

    Document.querySelector('.header .header-2').classlist.remove('active');
  }

  }

  Window.onload = ()=>{
    if(window.scrollY > 80){
  
      Document.querySelector('.header .header-2').classlist.add('active');
    }
    else{
  
      Document.querySelector('.header .header-2').classlist.remove('active');
    }
       

        
    }

    fadeOut();

    function loader(){

      document.querySelector('loader-container').classList.add('active');

    }
    function fadeOut(){

                setTimeout(loader, 4000);
    }
      
    var swiper = new Swiper(".books-slider", {
      spacebetween:10,
      loop:true,
      centeredslides:true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
       

      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },

        768: {
          slidesPerView: 2,
          
        },

        1024: {
          slidesPerView: 3,
        
        },
      },
    });

    var swiper = new Swiper(".featured-slider", {
      spacebetween:10,
      loop:true,
      centeredslides:true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
      
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },

      450: {
        slidesPerView: 2,
        
      },

      768: {
        slidesPerView: 3,
        
      },

      1024: {
        slidesPerView: 4,
      
      },
    },
  });
    
  var swiper = new Swiper(".arrivals-slider", {
    spacebetween:10,
    loop:true,
    centeredslides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },

   450 : {
      slidesPerView: 2,
      
    },

    768: {
      slidesPerView: 3,
      
    },

    1024: {
      slidesPerView: 4,
    
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spacebetween:10,
  grabCursor:true,
  loop:true,
  centeredslides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },

breakpoints: {
  0: {
    slidesPerView: 1,
    
  },

 450 : {
    slidesPerView: 2,
    
  },

  768: {
    slidesPerView: 3,
    
  },

  1024: {
    slidesPerView: 4,
  
  },
},
});

var swiper = new Swiper(".blogs-slider", {
  spacebetween:10,
  grabCursor:true,
  loop:true,
  centeredslides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },

breakpoints: {
  0: {
    slidesPerView: 1,
    
  },

 450 : {
    slidesPerView: 2,
    
  },

  768: {
    slidesPerView: 3,
    
  },

  1024: {
    slidesPerView: 4,
  
  },
},
});

function logfun(){
  document.getElementById('loginform').style.right = '0';
}

function closeform(){
  document.getElementById('loginform').style.right = '-105%';
}