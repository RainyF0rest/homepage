window.onload = function ()
{
    var value = 0;
    const plus = "+";
    const minus = "-";
    const times = "*";
    const divide = "/";
    const dot = ".";

    const one = "1";
    const two = "2";
    const three = "3";
    const four = "4";
    const five = "5";
    const six ="6";
    const seven = "7";
    const eight = "8";
    const nine = "9";
    const zero = "0";

    const buttonOne = document.getElementById("one");
    const buttonTwo = document.getElementById("two");
    const buttonThree = document.getElementById("three");
    const buttonFour = document.getElementById("four");
    const buttonFive = document.getElementById("five");
    
    const buttonSix = document.getElementById("six");
    const buttonSeven = document.getElementById("seven");
    const buttonEight = document.getElementById("eight"); 
    const buttonNine = document.getElementById("nine");
    const buttonZero = document.getElementById("zero");

    const buttonPlus = document.getElementById("plus");
    const buttonMinus = document.getElementById("minus");
    const buttonTimes = document.getElementById("multiply");
    const buttonDivide = document.getElementById("divide");

    const buttonFloat = document.getElementById("float");
    const buttonEqual = document.getElementById("equal");
    const displayValue = document.getElementById("display");
    const buttonClear = document.getElementById("clear");



    function displayModi()
    {
        if (value == "0")
        {
            value = "";
        }
    }

    function show()
    {
        displayValue.value = value ;
    }

    buttonClear.onclick = function clear()
    {
        value = "";
        show();
    }

    buttonOne.onclick = function appendOne()
    {
        displayModi();
        value += one;
        console.log(value);
        show();
    }

    buttonTwo.onclick = function appendTwo()
    {
        displayModi();
        value += two;
        console.log(value);
        show();
    }

    buttonThree.onclick = function appendThree()
    {
        displayModi();
        value += three;
        console.log(value);
        show();
    }


    buttonFour.onclick = function appendFour()
    {
        displayModi();
        value += four;
        console.log(value);
        show();
    }


    buttonFive.onclick = function appendFive()
    {
        displayModi();
        value += five;
        console.log(value);
        show();
    }
    
    buttonSix.onclick = function appendSix()
    {
        displayModi();
        value += six;
        console.log(value);
        show();
    }
        
    buttonSeven.onclick = function appendSeven()
    {
        displayModi();
        value += seven;
        console.log(value);
        show();
    }

            
    buttonEight.onclick = function appendEight()
    {
        displayModi();
        value += eight;
        console.log(value);
        show();
    }

            
    buttonNine.onclick = function appendNine()
    {
        displayModi();
        value += nine;
        console.log(value);
        show();
    }

    buttonZero.onclick = function appendZero()
    {
        displayModi();
        value += zero;
        console.log(value);
        show();
    }

    buttonPlus.onclick = function appendPlus()
    {
        displayModi();
        value += plus;
        console.log(value);
        show();
    }

    buttonMinus.onclick = function appendMinus()
    {
        displayModi();
        value += minus;
        console.log(value);
        show();
    }

    buttonTimes.onclick = function appendTimes()
    {
        displayModi();
        value += times;
        console.log(value);
        show();
    }

    buttonDivide.onclick = function appendDivide()
    {
        displayModi();
        value += divide;
        console.log(value);
        show();
    }

    buttonFloat.onclick = function appendFloat()
    {
        displayModi();
        value += dot;
        console.log(value);
        show();
    }

    buttonEqual.onclick = function calculate()
    {
        ans = eval(value);
        value = ans 
        show();
    }

    show();
}