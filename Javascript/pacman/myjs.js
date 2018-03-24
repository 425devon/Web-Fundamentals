$(document).ready(function(){
    var world = [
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,1,1,1,1,1,2,2,2,1,1,1,1,2,2,2,1,1,2,2,1,2],
      [2,2,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,2],
      [2,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1,2],
      [2,2,2,2,1,1,1,1,2,5,5,5,2,1,2,1,1,2,1,1,1,2],
      [2,1,1,1,1,2,1,1,2,2,2,2,2,1,2,1,1,2,2,1,1,2],
      [2,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,8,1,2],
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ];
    var loc = {
        x:1,
        y:1
    };
    var score = 0;
    //A cherry is made every 5 seconds only if theres no cherries on the map.
    let makeCherry= setInterval(function(){cherryBomb()},5000);
    let cherryBomb=()=>{
        for(let i = 0; i<world.length;i++){
          for(let x in world[i]){
              if(world[i][x] == 8){
                  console.log('cherry on board');
                  return false;
                }else if(world[i][x] == 1){
                (world[i][x]) = 1;
                return true;
                }else{
                  continue;
                }
            }
        }
    };

    function displayWorld(){
        var output = "";

        for(var i=0; i<world.length;i++){
            output += "\n<div class='row'>\n";
            for(var j=0; j<world[i].length;j++){
                if(world[i][j] == 2){
                    output += "<div class='brick'></div>";
                }else
                if(world[i][j] == 1){
                    output += "<div class='coin'></div>";
                }
                if(world[i][j] == 8){
                    output += "<div class='cherry'></div>";
                }
                if(world[i][j] == 5){
                    output += "<div class='ghost'></div>";
                }
                else
                if(world[i][j] == 0){
                    output += "<div class='empty'></div>";
                }
            }
            //console.log(output);
            output += "\n</div>";
        }
        $('#world').html(output);
    }
    displayWorld();

    $(document).keydown(function(e){
        if(e.keyCode == 37 && world[loc.y][loc.x-1]!= 2){
            $('#pacman').css('left', '-=25px');
            $('#pacman').css('transform','initial');
            $('#pacman').css('transform','scaleX(-1)');
            loc.x--;
        }
        if(e.keyCode == 39 && world[loc.y][loc.x+1]!= 2){
            $('#pacman').css('left', '+=25px');
            $('#pacman').css('transform','initial');
            loc.x++;
        }
        if(e.keyCode == 38 && world[loc.y-1][loc.x]!= 2){
            $('#pacman').css('top', '-=25px');
            $('#pacman').css('transform','initial');
            $('#pacman').css('transform','rotate(-90deg)');
            loc.y--;
        }
        if(e.keyCode == 40 && world[loc.y+1][loc.x]!= 2){
            $('#pacman').css('top', '+=25px');
            $('#pacman').css('transform','initial');
            $('#pacman').css('transform','rotate(90deg)');
            loc.y++;
        }
        if (world[loc.y][loc.x] == 1){
            world[loc.y][loc.x] = 0;
            score += 10;
            $('#score').children('h3').html(score);
            displayWorld();
        }else if (world[loc.y][loc.x] == 8){
            world[loc.y][loc.x] = 0;
            score += 50;
            $('#score').children('h3').html(score);
            displayWorld();
        }

    });
    
});

//40 down, up 38, left 37, right 39