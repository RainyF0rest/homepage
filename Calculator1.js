window.onload = function ()
{
    var value = 0;
    var result = false;
    var numNode = document.querySelectorAll(".num");
    console.log(numNode);
    var operatorNode = document.querySelectorAll(".operator");
    console.log(operatorNode);

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


    function buttonSimilator()
    {
        
        for (var i = 0, n = numNode.length; i < n; i ++)
        {
            numNode[i].addEventListener("click",
    function append(e)
    {
        displayModi();
        resultChecker();
        value += numNode[i].innerHTML;
        show();
    })
        }
    }

    function resultChecker()
    {
        if ( result === true)
        {
            value = "";
            result = false;
        }
    }

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

    buttonEqual.onclick = function calculate()
    {
        ans = eval(value);
        value = ans ;
        result = true ;
        show();
    }

    show();
}