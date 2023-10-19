AOS.init(); 
$('[data-aos]').each(function(){
     $(this).addClass("aos-init"); 
});

$('#fullpage').fullpage({
  slidesNavigation: true,
  controlArrows: false,
  onLeave: function(){
      $('.section [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
  }, // 화면 전환 직전에 실행
  onSlideLeave: function(){
      $('.slide [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
  }, // 슬라이드 전환 직전에 실행
  afterSlideLoad: function(){
      $('.slide.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
      });
  }, // 슬라이드 화면이 전환되고 난 후에 실행
  afterLoad: function(){
      $('.section.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
      });
  }}); // 풀페이지 화면이 전환되고나서 실행