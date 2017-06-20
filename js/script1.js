var guess = 0;
var answers = [0,0,0];
var gameInSession = false;
var trys = 3;
var n = 0;
var match = false;

$(document).ready(function(){
  $("span#trys").text(trys.toString());
  answers.forEach(function(answer){
    return (Math.random()*(25-0)+0).toFixed();
  });
  $("#SCREEN-1").show();
  $("#SCREEN-2").hide();
  $("#WINBOX").hide();
  $("#FAILBOX").hide();

  console.log();
  $("#SCREEN-1 #GAME-START").click(function(){
    $("#SCREEN-1").hide();
    $("#SCREEN-2").show();

    $("#SCREEN-2 #playerInput").submit(function(event) {
      event.preventDefault();
      guess = parseInt($("#SCREEN-2 #num"));
      do {
        if (guess === answer[n]) {
          $("#WINBOX").show();
          match = true;
        }
        else {
          $("#FAILBOX").show();

          if (guess <  answer[n])
          {
            $("#FAILBOX").append("you were less than the answer at index <"+n.toString()+"> which was: "+answer[n].toString() )
          }
          if (guess >  answer[n])
          {
            $("#FAILBOX").append("your guess was over the answer at index <"+n.toString()+"> which was: "+answer[n].toString() )
          }
        }
        n+=1;
      } while (match !== true && n !== answers.length-1)

    });
  });
});
