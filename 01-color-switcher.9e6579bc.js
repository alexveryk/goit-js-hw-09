const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(d){if("BUTTON"!==d.target.nodeName)return;console.log("Entered Start"),t.setAttribute("disabled",!0),e.removeAttribute("disabled"),r=setInterval((()=>{console.log(n()),o.style.backgroundColor=n()}),1e3)})),e.addEventListener("click",(function(o){console.log("Entered Stop"),clearInterval(r),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}));let r=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.9e6579bc.js.map