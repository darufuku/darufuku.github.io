$('.whitebox').mouseover(function(){
    if((this).attr('id') == 'box1'){
        $('#blurb1').fadeTo(500, 0).css('display', 'inline-block');
    }else if((this).attr('id') == 'box2'){
         $('#blurb2').fadeTo(500, 0).css('display', 'inline-block');
    }
    //$('.blurb').fadeTo(500, 0).css('display', 'inline-block');
});
$('.whitebox').mouseout(function(){
    if((this).attr('id') == 'box1'){
        $('#blurb1').fadeTo(500, 1).css('display', 'none');
    }else if((this).attr('id') == 'box2'){
         $('#blurb2').fadeTo(500, 1).css('display', 'none');
    }
   //$('.blurb').fadeTo(500, 1).css('display', 'none');
});