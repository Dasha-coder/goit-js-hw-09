!function(){var t,n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};n.startBtn.addEventListener("click",(function(e){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.body.style.backgroundColor="".concat(t)}),1e3),n.startBtn.disabled=!0,n.stopBtn.disabled=!1,console.dir(e.currentTarget)})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!1,n.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.43ba2888.js.map