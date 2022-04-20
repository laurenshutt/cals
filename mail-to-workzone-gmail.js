// ==UserScript==
// @name         Email to WorkZone, Gmail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lauren Shutt
// @include      https://mail.google.com/mail/*
// @grant        none
// @run-at       context-menu
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {

    'use strict';

    var tmBody = "";

    var signature = "\n\n--\nThis request was automagically generated. 🪄\nPlease submit future requests to https://calsvt.sharedwork.com/wz/template/pubprojrequest,RequestProject.vm";

    var tmSubject = jQuery("h2.hP").text();

    var tmName = jQuery("div[data-message-id] span[email]").attr("email")

    var tmEmail = jQuery("div[data-message-id] span[email] > span").html();

    if (window.getSelection) {
        tmBody = encodeURIComponent(window.getSelection().toString().replace(/(\r\n|\r|\n){2,}/g, "\n") + signature);
    } else if (document.selection && document.selection.type != "Control") {
        tmBody = encodeURIComponent(document.selection.createRange().text.replace(/(\r\n|\r|\n){2,}/g, "\n") + signature);
    }

    setTimeout(function(){

        var url = "https://calsvt.sharedwork.com/wz/template/pubprojrequest,RequestProject.vm?tmName=" + tmName + "&tmEmail=" + tmEmail + "&tmSubject=" + tmSubject + "&tmBody=" + tmBody;

        window.open(url);
    },200);
})();