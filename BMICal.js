function bmiCal()
{
    //declaration 
    w = document.getElementById("w").value;
    h = document.getElementById("h").value/100;
    //result declaration 
    thin = '<iframe src="https://giphy.com/embed/JKb28stpt0gwg" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p> <p >↑You are too thin , eat more↑</p></p>'
    medium = '<iframe src="https://giphy.com/embed/bDL3BsB4ViI2k" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑You are healthy and fit ! ↑</p>'
    chubby = '<iframe src="https://giphy.com/embed/47EstTgsR1vpK" width="480" height="369" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑Bit of chubby ! Still fine↑</p>'
    plump = '<iframe src="https://giphy.com/embed/lN9amhr8GZMhG" width="480" height="419" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑Overweight ! Start your diet or you may suffer with health issue !↑</p>'
    bmi = w/((h*h));
    console.log(`BMI : ${bmi}`);

    if( bmi < 18.5)
    {
        document.getElementById("result").innerHTML = thin ;
    }
    else if( bmi >= 18.5 && bmi <24 )
    {
        document.getElementById("result").innerHTML = medium ;
    }
    else if( bmi >24 && bmi <27 )
    {
        document.getElementById("result").innerHTML = chubby ;
    }
    else if( bmi >=27 )
    {
        document.getElementById("result").innerHTML = plump ;
    }
    else if ( bmi < 10 )
    {
        document.getElementById("result").innerHTML = plump ;
    }

}
