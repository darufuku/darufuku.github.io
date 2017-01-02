$('.whitebox').mouseover(function(){
    $('.blurb').fadeIn().css('display', 'inline-block');
});
$('.whitebox').mouseout(function(){
    $('.blurb').fadeOut().css('display', 'none');
});