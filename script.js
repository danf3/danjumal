$(document).ready(function(){

    $('.logo-bg').mouseenter(function(){
        $('.page-header').slideDown('slow')
    }).mouseleave(function(){
        $('.page-header').slideUp('slow')
    });//End slideup
});//End Ready 