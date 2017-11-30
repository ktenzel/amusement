$(function() {
  $("#animals").change(function() {
  	if ($(this).val() == "1") {
      $("#snakeInformation").show();
      $("#polarBearInformation").hide();
      $("#africanSwallowInformation").hide();
    } else if ($(this).val() == "2") {
      $("#polarBearInformation").show();
      $("#snakeInformation").hide();
      $("#africanSwallowInformation").hide();
    } else if ($(this).val() == "3") {
      $("#africanSwallowInformation").show();
      $("#snakeInformation").hide();
      $("#polarBearInformation").hide();
    }
  })

});
