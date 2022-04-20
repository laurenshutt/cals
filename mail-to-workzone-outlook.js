// ==UserScript==
// @name         Email to WorkZone, Outlook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Convert Outlook email to WorkZone request
// @author       Lauren Shutt
// @include      https://outlook.office.com/mail/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=office365.com
// @grant        none
// @run-at       context-menu
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {

    'use strict';

    var tmName, tmEmail;

    var tmBody = "";

    var tmSubject = $("[aria-level='2'][role='heading'] span").html();

    if (window.getSelection) {
        tmBody = encodeURIComponent(window.getSelection().toString().replace(/(\r\n|\r|\n){2,}/g, "\n"));
    } else if (document.selection && document.selection.type != "Control") {
        tmBody = encodeURIComponent(document.selection.createRange().text.replace(/(\r\n|\r|\n){2,}/g, "\n"));
    }

    $("#ReadingPaneContainerId span[aria-label^='Opens Profile Card for']").first().click();

    setTimeout(function(){

        tmName = $("[data-log-name='PersonName']").html();
        tmEmail = ($("button[title^='Email:'").attr("title").split("Email: ")[1]);

        setTimeout(function(){
            $("[data-log-name='CloseButton']").click();
        }, 800);
    }, 500);

    setTimeout(function(){

        var url = "https://calsvt.sharedwork.com/wz/template/pubprojrequest,RequestProject.vm?tmName=" + tmName + "&tmEmail=" + tmEmail + "&tmSubject=" + tmSubject + "&tmBody=" + tmBody;

        window.open(url);
    },1300);
})();