$("input[name='width-input']").on("click",function() {
  var $this= $(this), 
      score = $this.val(),
      scorePercent = (score/5) * 100;
  var widthToSet = +scorePercent + +score; 
  if (widthToSet > 100 ) { 
    widthToSet = 100;
  }
  //console.log(widthToSet);
  $(".progress").css("width",widthToSet + "%");
  $(".score").html(score + " : " + widthToSet); //$(".progress").css("width",$(this).val() + "%");
})

$(".dot").each(function(idx, value) { 
  console.log($(this).position());
  console.log($(this).outerWidth());
})
