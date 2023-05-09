window.onload = function () 
{
    var hr ,min , sec, msec;
    var hr = min = sec = msec = 0 ;
    var counter;
    var power = "off"; 

//button
    var buttonReset = document.getElementById("reset") ;
    var buttonSwitch = document.getElementById("switch") ;

//shortcut 
    var appendHr = document.getElementById("hr") ;
    var appendMin = document.getElementById("min") ;
    var appendSec = document.getElementById("sec") ;
    var appendMsec = document.getElementById("msec") ;

//icon
    const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>`;
    const stopIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
                  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
                  </svg>`;
    const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
                 <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                 </svg>`;

//implant icon into button 
    buttonReset.innerHTML = stopIcon;
    buttonSwitch.innerHTML = playIcon;

    //timewatch format
    function format(n)
    {
        return (n < 10) ? ("0" + n ) : n ;
    }

    //main Function
    function clockwork()
    {
        msec++;

        if (msec > 99)
        {
            sec++;
            msec = 0;
        }
        if (sec > 59)
        {
            min++;
            sec = 0;
        }
        if (min > 59)
        {
            hr++;
            min = 0;
        }

        appendMsec.innerHTML = format(msec);
        appendSec.innerHTML = format(sec);
        appendMin.innerHTML = format(min);
        appendHr.innerHTML = format(hr);

    }

    function starts()
    {
        counter = setInterval(clockwork , 10);
        power = "on" ;
        buttonSwitch.innerHTML = pauseIcon;
    }

    function stop() 
    {   
        clearInterval(counter);
        power = "off";
        buttonSwitch.innerHTML = playIcon;
    }

    //How button works

    buttonSwitch.onclick = function sp()
    {
        if (power === "off")
        {
            starts();
        }
        else
        {
            stop();
        }
    }

    buttonReset.onclick = function reset() 
    {   
        clearInterval(counter);

        appendMsec.innerHTML = "00";
        appendSec.innerHTML = "00";
        appendMin.innerHTML = "00";
        appendHr.innerHTML = "00";

        console.log(`time now is ${hr} : ${min} : ${sec} : ${msec}`);
        power = "off";
    }
}