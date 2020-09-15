//analog digital
setInterval(() => {

    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hroatation=30*htime + mtime/2;
    mroatation=6*mtime;
    sroatation=6*stime;


    hour.style.transform = `rotate(${hroatation}deg)`;
    minute.style.transform = `rotate(${mroatation}deg)`;
    second.style.transform = `rotate(${sroatation}deg)`;

}, 1000);


//digital clock
setInterval(() => {

    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let date= d.toLocaleDateString();

    let a=document.getElementById('time');
    a.innerHTML= h + ":"+ m + ":"+ s + " on " + date;

}, 1000);

