$('#box1').mouseover(function(){
    $('#blurb1').fadeTo(500, 0).css('display', 'inline-block');
});
$('#box1').mouseout(function(){
   $('#blurb1').fadeTo(500, 1).css('display', 'none');
});

$('#box2').mouseover(function(){
    $('#blurb2').fadeTo(500, 0).css('display', 'inline-block');
});
$('#box2').mouseout(function(){
   $('#blurb2').fadeTo(500, 1).css('display', 'none');
});

