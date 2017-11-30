$(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height < 60) {
    // debugger;
    $(".smallrides").show();
  } else if (height < 120 && height >= 60){
    $(".mediumrides").show();
  } else if (height >= 120) {
    $(".tallrides").show();
  }
 });
