// ==UserScript==
// @name         Agar Mass Ejector
// @namespace    
// @version      0.03
// @description  mass ejector
// @author       nikola
// @match        http://agar-hr.ga/*
// @match        http://www.agar-hr.ga/*
// @match        http://agar-balkan.ga/*
// @match        http://www.agar-balkan.ga/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var amount = 6;
    var duration = 50; //ms

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
    
})();
