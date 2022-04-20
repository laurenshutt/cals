// ==UserScript==
// @name         Email to WorkZone, WorkZone
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lauren Shutt
// @include      https://calsvt.sharedwork.com/wz/template/pubprojrequest,RequestProject.vm*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    jQuery("#project-request-question-set").val("26485");
    document.getElementById("project-request-question-set").dispatchEvent(new Event('change'));

    setTimeout(function(){
        let params = new URLSearchParams(window.location.search);

        jQuery("#name-input").val(params.get("tmName"));
        jQuery("#email-address-input").val(params.get("tmEmail"));
        jQuery("#project-request-name").val("[Email request] " + params.get("tmSubject"));
        jQuery("#deadline").val(new Date(Date.now() + 12096e5).toLocaleDateString()); //two weeks away
        jQuery("#question_2946510").val("Website update").change(); //Change for others
        jQuery("#question_2946280").val("CALS administration").change();
        jQuery("#question_2948326").val("Public").change();
        jQuery("#question_2946666").val(params.get("tmBody"));
        jQuery("#question_2946611_6900375").prop("checked", true); //Change for others
        jQuery("#question_2946682").val("Zeke Barlow <bzeke@vt.edu>");
        jQuery("#question_2950119_6904795").prop("checked", true);
    }, 200);
})();
