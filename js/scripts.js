$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown().hide();
    $("#development").show();
  });
  $("#development").click(function(){
    $("#development").slideUp();
    $("#development-image").slideDown();
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown().hide();
    $("#design").show();
  });
  $("#design").click(function(){
    $("#design").slideUp();
    $("#design-image").slideDown();
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown().hide();
    $("#product").show();
  });
  $("#product").click(function(){
    $("#product").slideUp();
    $("#product-image").slideDown();
  });
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});


$(".content").submit(function (e) {
  e.preventDefault();
  var user = document.getElementById("name").value;
  alert(user + "your message has been recieved successfully and thanks for keeping in touch");
});