aos.init();

$(function() {
  var page = $('#fullpage').fullpage({
    sectionsColor : ['skyblue', 'grey', '#efefef'],
    'afterLoad': function(anchorLink, index) {
      if ( index == 1 ) {
        console.log('첫번째다');
      }

      if ( index == 2) {
        console.log('두번째다');
        
      }
  }
  })
})






      //,1100,"animated fadeInRight")
      //   setTimeout(function(){
      //     $(".about-contents").addClass("fade-active",900,"animated fadeInRight",function(){
      //         $(".about-contents").delay(400).addClass("active",800,"animated fadeInRight")
      //     })
      // },700)