$(()=>{
    // 네비 각각 내려오기
    /*
    $('.nav>li').mouseover(function() {
      $(this).children('.submenu').stop().slideDown();
    });
    $('.nav>li').mouseout(function() {
      $(this).children('.submenu').stop().slideUp();
    });
    */
  
    // 네비 전체 내려오기
    $('nav').mouseover(function() {
      $('.submenu').stop().slideDown();
    });
    $('nav').mouseout(function() {
      $('.submenu').stop().slideUp();
    });
  
    
    // img slide
    let x = $('#imgslide>img');
    let count = 3;
    setInterval(function() {
      count--;
      if(count==0) {
        x.fadeIn();
        count = 3;  //중요 다시 넣어줌
      } else {
        x.eq(count).fadeOut();
      }
    }, 2000);
  })