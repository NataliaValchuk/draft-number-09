const t={activeBtn:"stop",start:{text:"Start",class:"start"},stop:{text:"Stop",class:"stop"}},e={timer:document.getElementById("timer"),btn:document.getElementById("btn")},n=new Date(`Jan 1, ${(new Date).getFullYear()+1}`);e.btn.addEventListener("click",(function(){const{activeBtn:n,stop:{class:a,text:l},start:{class:c,text:r}}=t;n===a?(console.log("Stop"),clearInterval(s),t.activeBtn=c,e.btn.textContent=r,e.btn.classList.add(c),e.btn.classList.remove(a)):(console.log("Start"),s=setInterval(o,1e3),console.log(s),t.activeBtn=a,e.btn.textContent=l,e.btn.classList.add(a),e.btn.classList.remove(c))})),o();let s=setInterval(o,1e3);function o(){const t=new Date,s=n-t,o=Math.floor(s/864e5),l=Math.floor(s/36e5%24),c=Math.floor(s/6e4%60),r=Math.floor(s/1e3%60);e.timer.textContent=`${o} days ${a(l)} hours ${a(c)} minutes ${a(r)} seconds`}function a(t){return String(t).padStart(2,"0")}console.log(s);
//# sourceMappingURL=02-timer.b15d6e9e.js.map
