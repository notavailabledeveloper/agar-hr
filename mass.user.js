// ==UserScript==
// @name         Agar Mass Ejector
// @namespace    
// @version      0.03
// @description  izbacuje masu ko ludo 
// @author       pero detlic je petlic
// @match        http://agar-balkan.ga/*
// @match        http://www.agar-balkan.ga/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var amount = 15;
    var duration = 30; //ms

    var overwriting = function(evt) {
        if (evt.keyCode === 81) { // KEY_Q
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({keyCode: 87}); // KEY_W
                    window.onkeyup({keyCode: 87});
                }, i * duration);
            }
        }
    };


    window.addEventListener('keydown', overwriting);
    $("#nickname").attr("maxlength","40");
})();

