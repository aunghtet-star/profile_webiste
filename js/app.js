$('.pricing-slick').slick({
    arrows : false, 
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

 
    $(window).scroll(function(){
      let current = $(this).scrollTop();
      let currentHeight = $(window).height();
     
      if(current > currentHeight-100){
        $('.nav-site').addClass("nav-site-scroll");
        
      }else{
       $('.nav-site').removeClass("nav-site-scroll");
       setActive('home');
      }
    })
     
    $('.navbar-toggler').click(function(){
      let hasclass = $('.navbar-collapse').hasClass('show');
      
      if(hasclass){
        $('.menu-icon').removeClass('fa-close').addClass('fa-bars');
      }else{
        $('.menu-icon').removeClass('fa-bars').addClass('fa-close');
      }
    })
    
  //   $('#home').waypoint(function(direction) {
  //     $('.nav-link').removeClass('under-border');
  //     $('.nav-link[href="#home"]').addClass('under-border');
  //   }, {
  //     offset: '0%'
  //   })
    
  //   $('#about').waypoint(function(direction) {
  //      $('.nav-link').removeClass('under-border');
  //      $('.nav-link[href="#about"]').addClass('under-border');
  //   }, {
  //     offset: '25%'
  //   })

  //   $('#services').waypoint(function(direction) {
  //     $('.nav-link').removeClass('under-border');
  //     $('.nav-link[href="#services"]').addClass('under-border');
  //   }, {
  //     offset: '25%'
  //   })

  //  $('#pricing').waypoint(function(direction) {
  //   $('.nav-link').removeClass('under-border');
  //   $('.nav-link[href="#pricing"]').addClass('under-border');
  // }, {
  //   offset: '25%'
  // })

  // $('#contact').waypoint(function(direction) {
  //   $('.nav-link').removeClass('under-border');
  //   $('.nav-link[href="#contact"]').addClass('under-border');
  // }, {
  //   offset: '0'
  // })

    function setActive(current){
        $('.nav-link').removeClass('under-border');
        $(`.nav-link[href='#${current}']`).addClass('under-border');
    }

    function navScroll(){
      let currentSection = $('section[id]');
      
      currentSection.waypoint(function(direction){

        if(direction == 'down'){
          let currentSectionId = $(this.element).attr('id');
          console.log(currentSectionId);
          setActive(currentSectionId);
        }
      } ,{
          offset: '150px'
        });

        currentSection.waypoint(function(direction){

          if(direction == 'up'){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
          }
        } ,{
            offset: '150px'
          });
    }

    navScroll();
    