// ==UserScript==
// @name         Download Qualtrics images
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Zeke was on the strugglebus
// @author       Lauren Shutt
// @include      https://vce.az1.qualtrics.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==



(function() {
    
    'use strict';

    var row = 0;

    function downloadImages(){

        $("#Widget_2401d9e5-9adc-476f-9d5a-027453006fe6 > div > div > div.widget-content-wrapper.ng-scope > div > div > div.scroll.ng-isolate-scope > table > tbody tr").each(function(index){
            if (index == row){
                var county = $(this).find("td:first-child").html();
                $(this).find("a span").click();
                setTimeout(function(){
                    console.log("running");
                    $(".single-record-view").contents().find("tr[id^=filenameInfoRow] a").each(function(imageIndex){
                        var type;
                        switch(imageIndex){
                            case 0:
                                type = "main";
                                break;
                            case 1:
                                type = "agent";
                                break;
                            case 2:
                                type = "stakeholder";
                                break;
                        }

                        fetch($(this).attr("href"))
                            .then((response) => response.blob())
                            .then((blob) => {

                            var url = window.URL || window.webkitURL;
                            var link = url.createObjectURL(blob);
                            var a = $("<a />");
                            a.attr("download", county + "-" + type);
                            a.attr("href", link);
                            $("body").append(a);
                            a[0].click();
                            $("body").remove(a);
                        });

                        $("div.modal-footer > button").click();
                    });
                },2500);
            }
        });
        row++;
    }

    function onKeydown(evt) {
       // Use https://keycode.info/ to get keys
       if (evt.keyCode == 68) {
           downloadImages();
       }
    }

    document.addEventListener("keydown", onKeydown, true);

})();
