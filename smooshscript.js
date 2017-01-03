$(document).ready(function(){
    $('#box1').mouseenter(function(){
        $('#blurb1').css('display', 'inline-block');
    });
    $('#box1').mouseleave(function(){
       $('#blurb1').css('display', 'none');
    });

    $('#box2').mouseenter(function(){
        $('#blurb2').css('display', 'inline-block');
    });
    $('#box2').mouseleave(function(){
       $('#blurb2').css('display', 'none');
    });  
});


