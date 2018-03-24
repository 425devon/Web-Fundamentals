$(document).ready(function(){
    var name = $('#fname').val(); 
    let createCard=()=>{
        $('.right').append("<div><h2></h2></div>");
        $('.right').children('div:last').children('h2').html($('#fname').val()+" "+$('#lname').val());
        $('.right').children('div:last').children().after("<h3></h3>");
        $('.right').children('div:last').children('h3').html("Click for Description!");
        $('.right').children('div:last').children('h3').after("<p></p>");
        $('.right').children('div:last').children('p').html($('#about').val());
    };
    $('button').on("click",function(event){
        if($('#fname').val().length != 0 || $('#lname').val().length != 0){
            createCard();
            event.preventDefault();
        }else{
            alert("Please fill out your First and Last name");
        }
        $('h3').on('click',function(){
            $('p').slideToggle("slow");
        })
    });
});