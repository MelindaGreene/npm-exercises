"use strict";
const $ = require('jquery');

$(document).ready(function () {

    $ ('#nodes').click(function(){
        $ ('#nodes1').fadeToggle(1500);
    });

    $('#nodes2').click(function(){
        $('#nodes3').slideUp();
    });


    const sayHello = (name) =>{
        console.log("hello")
    };

    sayHello();
});


