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
    const buttonPlus = document.getElementById("plus");
    const buttonEqual = document.getElementById("equal");
    const displayValue = document.getElementById("display");



    function clear()
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

    buttonOne.onclick = function appendOne()
    {
        clear();
        value += one;
        console.log(value);
        show();
    }

    buttonPlus.onclick = function appendPlus()
    {
        clear();
        value += plus;
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