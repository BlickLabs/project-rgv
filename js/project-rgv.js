function doSomething(e){"/project-rgv/"!==window.location.pathname&&"/project-rgv/index.html"!==window.location.pathname&&"/index.html"!==window.location.pathname&&"/"!==window.location.pathname||(e>140?(document.querySelector(".site-navbar").classList.add("site-navbar-blue"),document.querySelector(".site-navbar").classList.remove("site-navbar-transparent")):(document.querySelector(".site-navbar").classList.add("site-navbar-transparent"),document.querySelector(".site-navbar").classList.remove("site-navbar-blue")))}!function(){$.validator.setDefaults({invalidHandler:function(e,s){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var s=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),i=$(e).find(".form-message"),r=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),t=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),a=function(e){var s=e?r:t;n.removeAttr("disabled"),i.removeClass(e?"error":"success"),i.addClass(e?"success":"error"),i.html(s)};n.attr("disabled","disabled"),i.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:s}).done(function(s){a(1===parseInt(s)),e.reset()}).fail(function(){a(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var last_known_scroll_position=0,ticking=!1;doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0});var lYear=(new Date).getFullYear();document.querySelector("#license-year").innerHTML=lYear,function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function s(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var n=window.matchMedia("(max-width: 767px)");n.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(s)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),n.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(s))})}();var servicesTitleOne=document.querySelector(".services-title-1"),servicesTitleTwo=document.querySelector(".services-title-2"),servicesTitleThree=document.querySelector(".services-title-3"),servicesTitleFour=document.querySelector(".services-title-4"),servicesContainer1=document.querySelector(".services-container-1"),servicesContainer2=document.querySelector(".services-container-2"),servicesContainer3=document.querySelector(".services-container-3"),servicesContainer4=document.querySelector(".services-container-4");servicesTitleOne.addEventListener("click",function(){servicesContainer1.classList.remove("service-hidden"),servicesContainer2.classList.add("service-hidden"),servicesContainer3.classList.add("service-hidden"),servicesContainer4.classList.add("service-hidden")}),servicesTitleTwo.addEventListener("click",function(){servicesContainer1.classList.add("service-hidden"),servicesContainer2.classList.remove("service-hidden"),servicesContainer3.classList.add("service-hidden"),servicesContainer4.classList.add("service-hidden")}),servicesTitleThree.addEventListener("click",function(){servicesContainer1.classList.add("service-hidden"),servicesContainer2.classList.add("service-hidden"),servicesContainer3.classList.remove("service-hidden"),servicesContainer4.classList.add("service-hidden")}),servicesTitleFour.addEventListener("click",function(){servicesContainer1.classList.add("service-hidden"),servicesContainer2.classList.add("service-hidden"),servicesContainer3.classList.add("service-hidden"),servicesContainer4.classList.remove("service-hidden")});