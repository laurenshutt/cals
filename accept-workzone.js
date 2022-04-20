// ==UserScript==
// @name         Accept WorkZone project
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically generate project from request
// @author       Lauren Shutt
// @match        https://calsvt.sharedwork.com/wz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sharedwork.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    jQuery("a.link-general.request-details-link").on("click",function(){

        var divCheckingInterval = setInterval(function(){

            // Find it with a selector
            if(document.querySelector("#category-select")){

                clearInterval(divCheckingInterval);

                //Category
                jQuery("#category-select").val("146547").trigger("change");
                jQuery("#category-row > div > div.select > div > span").html("Web Update");

                //User
                jQuery("#ResourceOrUserId_1").val("user_11766021").attr("selected","selected");
                jQuery("#additional-resource-1 > div").html('<div class="selectize-input items not-full has-options has-items"><div class="item" data-value="user_11766021">Me<a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">×</a></div><input type="select-multiple" autocomplete="off" tabindex="" id="ResourceOrUserId_1-selectized" style="width: 4px; opacity: 0; position: absolute; left: -10000px;"></div>');

                //Job type
                jQuery("#cf_3249").val("146547").trigger("change");

                //Use existing template
                jQuery("#projectTemplateID").val("1618324").trigger("change");
                jQuery("#selected-template-name").html("Website update");

                jQuery("#create-project-form > div.modal-footer > button").click();
            };

            jQuery("a[title='Close details']").on("click",function(){

                clearInterval(divCheckingInterval);
            });
        }, 200);
    });
})();