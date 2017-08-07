// ==UserScript==
// @name         Agar Balkan Nick
// @namespace    
// @version      0.01
// @description  za duzi nick
// @author       magic blob
// @match        http://agar-balkan.ga/*
// @match        http://www.agar-balkan.ga/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  $("#nickname").attr("maxlength", 45);
})();
