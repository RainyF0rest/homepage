window.onload = function ()
{
    var value = 0;
    var result = false;
    var numNode = document.querySelectorAll(".num");
    var operatorNode = document.querySelectorAll(".operator");

    const buttonEqual = document.getElementById("equal");
    const displayValue = document.getElementById("display");
    const buttonClear = document.getElementById("clear");
    const buttonFloat = document.getElementById("float");

    function numPadSimilator()
    {
        
        for (var i = 0, n = numNode.length; i < n; i ++)
        {
            numNode[i].addEventListener("click", function append(e)
    {
        resultChecker();
        value += e.target.innerHTML;
        show();
    })
        }
    }

    function operatorSimulator()
    {
        for (var i = 0, n = operatorNode.length; i < n; i++ )
        {
            operatorNode[i].addEventListener("click", function appendd(e)
            {
                function oneOperatorOnce()
                {
                        if (value[value.length-1] === "+" || value[value.length-1] === "-" || value[value.length-1] === "x" || value[value.length-1] === "÷")
                        {
                            var newValue = value.substring(0,value.length - 1) + e.target.innerHTML;
                            value = newValue;
                        }
                        else
                        {
                            value += e.target.innerHTML; 
                        }
                }
                if (result == true)
                {
                    result = false;
                }


                oneOperatorOnce();
                show();
            }
)
        }
    }




    function oneDotOnly()
    {   
        var countDot = 0 ;
        for (var i = 0 , n = value.length; i < n ; i++)
        {
            if (value[i] === ".")
            {
                countDot +=1;
            }
            if (value[i] === "+" || value[i] === "-" || value[i] === "x" || value[i] === "÷")
            {
                if (countDot > 0)
                {
                    countDot -= 1 ;
                }
            }

        }

        if (countDot >0 )
        {
            return false;
        }
        else 
        {
            return true;
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
        displayModi();
        displayValue.value = value ;
    }

    buttonFloat.onclick = function float()
    {
        function lastChar()
        {
            if (value[value.length - 1] == "+" || value[value.length - 1] == "-" || value[value.length - 1] == "/" || value[value.length - 1] == "*") 
                {
                    return false;
                }
            else 
            {
                return true;
            }
        }

        if (oneDotOnly() == true && lastChar() == true )
        {
            value += buttonFloat.innerHTML;
        }
        show();
    }

    buttonClear.onclick = function clear()
    {
        value = "";
        show();
    }

    buttonEqual.onclick = function calculate()
    {
        function tranferer()
        {
            for (i = 0, n = value.length ; i < n ; i++)
            {
                if( value[i] == "x" )
                {
                    var newValue = value.substring(0, i) + "*" + value.substring(i + 1 , value.length);
                    value = newValue;
                }
                if (value[i]== "÷" )
                {
                    var newValue = value.substring(0, i) + "/" + value.substring(i + 1 , value.length);
                    value = newValue;
                }
            }
        }
        tranferer();
        ans = eval(value);
        value = ans ;
        result = true ;
        show();
    }

    show();
    numPadSimilator();
    operatorSimulator();
}
