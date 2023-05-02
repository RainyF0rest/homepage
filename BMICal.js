function bmiCal()
{
    //declaration 
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value/100;
    //result declaration 
    const thin = '<iframe src="https://giphy.com/embed/JKb28stpt0gwg" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p> <p >↑You are too thin , eat more↑</p></p>'
    const medium = '<iframe src="https://giphy.com/embed/bDL3BsB4ViI2k" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑You are healthy and fit ! ↑</p>'
    const chubby = '<iframe src="https://giphy.com/embed/47EstTgsR1vpK" width="480" height="369" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑Bit of chubby ! Still fine↑</p>'
    const plump = '<iframe src="https://giphy.com/embed/lN9amhr8GZMhG" width="480" height="419" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑Overweight ! Start your diet or you may suffer with health issue !↑</p>'
    const alien = '<iframe src="https://giphy.com/embed/PApUlVfEFmZAQ" width="272" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>↑Are you really a human being ? ↑</p>'
    const bmi = w/((h*h));
    
    document.getElementById("BMI").value = bmi;

    if( bmi < 18.5 && bmi >= 10 )
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
    else if( bmi >=27 && bmi <= 40 )
    {
        document.getElementById("result").innerHTML = plump ;
    }
    else if ( bmi < 10 || bmi > 40 )
    {
        document.getElementById("result").innerHTML = alien ;
    }

}
