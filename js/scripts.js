$(document).ready(function(){
  var answer_user = prompt("Which animal do you want to learn about? Snake, Turtle or Eagle ?")
  alert("So, you like " + answer_user.toUpperCase() + ", enjoy the following information about it !!")
  $(".clickable").click(function(){ 
    $("#text-showing").toggle();
    $("#text-hidden").toggle();
  });
  
  $(".clickable1").click(function(){ 
    $("#text-showing1").toggle();
    $("#text-hidden1").toggle();
  });

  $(".clickable2").click(function(){ 
    $("#text-showing2").toggle();
    $("#text-hidden2").toggle();
  });
  
  
});