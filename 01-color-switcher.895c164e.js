!function(){var t=document.querySelector("[data-start"),e=document.querySelector("[data-stop"),o=!1;t.addEventListener("click",(function(){o=!0,t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){o=!1,t.removeAttribute("disabled"),e.setAttribute("disabled","")})),setInterval((function(){o&&(document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)}();
//# sourceMappingURL=01-color-switcher.895c164e.js.map