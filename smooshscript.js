$('.whitebox').mouseover(function(){
    $('.blurb').fadeTo(0,1000).css('display', 'inline-block');
});
$('.whitebox').mouseout(function(){
    $('.blurb').fadeTo(1,1000).css('display', 'none');
});