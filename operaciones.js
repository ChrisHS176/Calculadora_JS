function operaciones(op)
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if(isNaN(parseFloat(document.getElementById('num1').value)))
    {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número</span>"
        document.getElementById("num1").innerText="0";
        document.getElementById("num1").focus();
    } else if(isNaN(parseFloat(document.getElementById('num2').value)))
    {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número</span>"
        document.getElementById("num2").innerText="0";
        document.getElementById("num2").focus();
    } else {
        switch(op){
            case 'sumar':
                var resultado = parseFloat(num1) + parseFloat(num2);
                document.getElementById('resultado').innerHTML="<span style='color: #00FF04; font-family: Arial, Helvetica, sans-serif;'>" + resultado + "</span>";
                break;
            case 'restar':
                var resultado = parseFloat(num1) - parseFloat(num2);
                document.getElementById('resultado').innerHTML="<span style='color: #00FF04; font-family: Arial, Helvetica, sans-serif;'>" + resultado + "</span>";
                break;
            case 'multiplicar':
                var resultado = parseFloat(num1) * parseFloat(num2);
                document.getElementById('resultado').innerHTML="<span style='color: #00FF04; font-family: Arial, Helvetica, sans-serif;'>" + resultado + "</span>";
                break;
            case 'dividir':
                if (num2 == 0){
                document.getElementById('resultado').innerHTML="<span style='color: red;'>No puedes dividir entre cero</span>"
                }else{
                    var resultado = parseFloat(num1) / parseFloat(num2);
                    document.getElementById('resultado').innerHTML="<span style='color: #00FF04; font-family: Arial, Helvetica, sans-serif;'>" + resultado + "</span>";}
                break;
            case 'potencia':
                var resultado = parseFloat(num1) ** parseFloat(num2);
                document.getElementById('resultado').innerHTML="<span style='color: #00FF04; font-family: Arial, Helvetica, sans-serif;'>" + resultado + "</span>";
                break;
            case 'raiz':
                var resultado = parseFloat(num1) ** (1 / parseFloat(num2));
                document.getElementById('resultado').innerHTML="<span style='color: #00FF04; font-family: Arial, Helvetica, sans-serif;'>" + resultado + "</span>";
                break;
        }
        
    }
}
