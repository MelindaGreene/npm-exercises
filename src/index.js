"use strict";
const $ = require('jquery');
const item = require('./practice.js');
$(document).ready(function () {

    $ ('#nodes').click(function(){
        $ ('#nodes1').fadeToggle(1500);
    });

    $('#nodes2').click(function(){
        $('#nodes3').slideUp();
    });

    $('body').css('color','powderblue');

    const sayHello = (name) =>{
        console.log("hello")
    };

    sayHello();
    console.log(item.color);
});


