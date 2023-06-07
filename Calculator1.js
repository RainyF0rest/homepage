window.onload = function ()
{
    var value = 0;
    var result = false;
    var numNode = document.querySelectorAll(".num");
    console.log(numNode);
    var operatorNode = document.querySelectorAll(".operator");
    console.log(operatorNode);

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
                        if (value[length] == "+" || value[length] == "-" || value[length] == "x" || value[length] == "÷")
                        {
                            value[length] = e.target.innerHTML;
                        }
                        else
                        {
                            value += e.target.innerHTML;
                        }
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

    //write sth turn x into * n so on .
    buttonEqual.onclick = function calculate()
    {
        ans = eval(value);
        value = ans ;
        result = true ;
        show();
    }

    show();
    numPadSimilator();
    operatorSimulator();
}
