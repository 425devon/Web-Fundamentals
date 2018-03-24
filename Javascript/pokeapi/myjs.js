$(document).ready(function(){
    var $orders = $('#orders');
    let populate = () =>{
        for(var i=1;i<=151;i++){
            $.ajax({
                type: 'GET',
                url: 'http://pokeapi.salestock.net/api/v2/pokemon/'+i.toString()+'/',
                success: function(pokemon){
                    console.log('success', pokemon);
                    $orders.append('<li><img src='+pokemon.sprites.front_shiny+'></li>')
                }
            });
        }
    };
    populate();
});

