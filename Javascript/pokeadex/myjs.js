
$(document).ready(function(){
    var $orders = $('#orders');
    var $sCard = $('#sCard');
    var current = 0;

    $('.images').on('click', 'img', function(){
        current = $(this).attr('id');
        makeCard(current);
    }); 

    let makeCard =(pId)=>{
        $.get('https://cors.now.sh/https://pokeapi.co/api/v2/pokemon/'+current.toString()+'/', function(pokemon){
          
                console.log(pokemon);
                $sCard.append('<h1>'+pokemon.name+'</h1>');
                $sCard.append('<img src='+pokemon.sprites.front_shiny+'>');
                $sCard.append('<ul id="types"><h4>Types:</h4></ul>');
                $sCard.append('<h4>Height:</h4><br>');
                $sCard.append('<h4>'+pokemon.height+'</h4>');
                $sCard.append('<h4>Weight:</h4><br>');
                $sCard.append('<h4>'+pokemon.weight+'</h4>');
                for(var i = 0; i<= pokemon.types.length; i++){
                    $('#types').append('<li>'+pokemon.types[i].type.name+'</li>');
                }
                    
            }, "json");
    };
    


    let populate = () =>{
        for(var i=1;i<=151;i++){
            $.get('https://cors.now.sh/https://pokeapi.co/api/v2/pokemon/'+i.toString()+'/', function(pokemon){
                console.log(pokemon);
                $orders.append('<li><img src='+pokemon.sprites.front_default+' id='+pokemon.id+'></li>');

                    
            }, "json");
        }
    };
    populate();

});















