$(".blurb").hide();
alert("hello");
$('.blurb').hover(
  function () {
    $(this).show();
  }, 
  function () {
    $(this).hide();
  }
);