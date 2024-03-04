const days=document.querySelector("#days"),
 hours=document.querySelector("#hours"), 
 minutes=document.querySelector("#minutes"), 
 seconds=document.querySelector("#seconds");



function UpdateTime() {
  const currentYear = new Date().getFullYear();

  const newYear = new Date(`Januaury 1 ${currentYear + 1} 00:00:00`);
  const currentDate = new Date();

  /***
   * 1000ms - 1s
   * 60s - 1m
   * 60m - 1hr
   * 24hr - 1day
   */

  const diff = newYear - currentDate;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 12;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(UpdateTime,1000)