function clock()
{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let period = document.getElementById('period');

    let h = new Date().getHours();
    hours.innerHTML = h; 

    let m = new Date().getMinutes();
    if(m < 10){
        m ='0' + m; 
    }
    minutes.innerHTML = m;
    let s = new Date().getSeconds();
    if(s<10)
    {
        s = '0' + s;
    }
    seconds.innerHTML = s;
    let ampm = h>= 12?"PM" : "AM";
    period.innerHTML = ampm;
    

    if(h<10){
        h = '0'+ h;
    }
    if(h > 12)
    {
        h='0'+(h-12);
    }
    if(h==12 && ampm == "AM")
    {
        h = "00";
    }
    hours.innerHTML = h; 
};
setInterval(clock,1000);
clock();