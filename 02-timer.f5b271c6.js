!function(){var t={activeBtn:"stop",start:{text:"Start",class:"start"},stop:{text:"Stop",class:"stop"}},e={timer:document.getElementById("timer"),btn:document.getElementById("btn")},n=new Date("Jan 1, ".concat((new Date).getFullYear()+1));e.btn.addEventListener("click",(function(){var n=t.activeBtn,s=t.stop,c=s.class,l=s.text,r=t.start,i=r.class,v=r.text;n===c?(console.log("Stop"),clearInterval(a),t.activeBtn=i,e.btn.textContent=v,e.btn.classList.add(i),e.btn.classList.remove(c)):(console.log("Start"),a=setInterval(o,1e3),console.log(a),t.activeBtn=c,e.btn.textContent=l,e.btn.classList.add(c),e.btn.classList.remove(i))})),o();var a=setInterval(o,1e3);function o(){var t=new Date,a=n-t,o=Math.floor(a/864e5),c=Math.floor(a/36e5%24),l=Math.floor(a/6e4%60),r=Math.floor(a/1e3%60);e.timer.textContent="".concat(o," days ").concat(s(c)," hours ").concat(s(l)," minutes ").concat(s(r)," seconds")}function s(t){return String(t).padStart(2,"0")}console.log(a)}();
//# sourceMappingURL=02-timer.f5b271c6.js.map