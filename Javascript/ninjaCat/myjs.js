$(document).ready(function(){
    var ninja =["img/ninja0.png","img/ninja1.png","img/ninja2.png","img/ninja3.png","img/ninja4.png"];
    var cat =["img/cat0.png","img/cat1.png","img/cat2.png","img/cat3.png","img/cat4.png"];
    $('img').click(function(){
        console.log($(this).attr('class')+" "+$(this).attr('id'));
        if($(this).attr('class')=='cat'){
            $(this).attr('class', 'ninja');
            $(this).attr('src', ninja[$(this).attr('id')]);
        }else if($(this).attr('class')=='ninja'){
            $(this).attr('class', 'cat');
            $(this).attr('src', cat[$(this).attr('id')]);
        }
    });
});