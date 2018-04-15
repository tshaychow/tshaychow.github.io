$(function(){
  $('.img-mini').find('img').on('mouseover',function(event){
    var target=$(event.target);
    var sval=target.attr('src');
    var aval=target.prop('alt');

    $('#big').attr('src',sval);
    $('#caption').css('right','').css('font-size','20px').css('font-family','Poppins').css('width','35vw').animate({left:0},300).text(aval);
    
  
  }); 
  $('.img-mini').find('img').on('mouseleave',function(){

  });


});