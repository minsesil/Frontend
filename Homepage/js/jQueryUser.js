$(()=> {
    //각각 내려오기
    /*
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').stop().slideDown();
    });
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').stop().slideUp();
    });
    */

    //네비 전체 내려오기 (가장많이사용함)
    $('nav').mouseover(function() {
        $('.submenu').stop().slideDown();
    });
    $('nav').mouseout(function() {
        $('.submenu').stop().slideUp();
    });

    
    //img slide
    //  let x = $('#imgslide > div')
    //  setInterval(function() {
    //     if(x.position().left==-2000) {
    //         x.animate({left:'-=1000px'},function() {
    //             x.css('left',0);
    //         });
    //     } else {
    //         x.animate({left:'-=1000px'});
    //     }      
    //  }, 2000);

    let x = $('#imgslide>img');
    let count = 3;
    setInterval(function() {
        count--;
        if(count==0) {
            x.fadeIn();
            count = 3;
        } else {
            x.eq(count).fadeOut();
        }
      }, 2000);
    })
