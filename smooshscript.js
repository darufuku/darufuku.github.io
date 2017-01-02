$('.whitebox').mouseover(function(){
    //$('.blurb').fadeTo(500, 0).css('display', 'inline-block');
    $((this).children('.blurb')).fadeTo(500, 0).css('display', 'inline-block');
});
$('.whitebox').mouseout(function(){
   // $('.blurb').fadeTo(500, 1).css('display', 'none');
    $((this).children('.blurb')).fadeTo(500, 1).css('display', 'none');
});