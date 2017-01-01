$(".blurb").hide();

$('.blurb').hover(
  function () {
    $(this).show();
  }, 
  function () {
    $(this).hide();
  }
);