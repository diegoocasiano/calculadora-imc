
    var kilos = document.getElementById("texto_lineas1")
    var estatura = document.getElementById("texto_lineas2")
    var boton = document.getElementById("botoncito")
    boton.addEventListener("click", calcularPorClick);

    

    function calcularPorClick()
    {
        var a = (kilos.value);
        var b = (estatura.value);
        var exponente = 2;
        var imc_final;

        

        imc_final = (a / b ** exponente).toFixed(1);
        document.getElementById("result").innerHTML="Tu <strong>IMC</strong> es " + imc_final

        

        if(imc_final<18.5)
        document.getElementById("estado").innerHTML="<strong>Bajo peso</strong>"

        else if(imc_final>=18.5 && imc_final<=24.9)
        document.getElementById("estado").innerHTML="<strong>Peso normal</strong>"

        else if(imc_final>=25.0 && imc_final<=26.9)
        document.getElementById("estado").innerHTML="<strong>Sobrepeso grado I</strong>"

        else if(imc_final>=27.0 && imc_final<=29.9)
        document.getElementById("estado").innerHTML="<strong>Sobrepeso grado II</strong>"

        else if(imc_final>=30.0 && imc_final<=34.9)
        document.getElementById("estado").innerHTML="<strong>Obesidad de tipo I</strong>"

        else if(imc_final>=35.0 && imc_final<=39.9)
        document.getElementById("estado").innerHTML="<strong>Obesidad de tipo II</strong>"

        else if(imc_final>=40.0 && imc_final<=49.9)
        document.getElementById("estado").innerHTML="<strong>Obesidad de tipo III</strong>"

        else if(imc_final>=50)
        document.getElementById("estado").innerHTML="<strong>Obesidad de tipo IV</strong>"

        else
        {alert("Ingresa tu peso y tu estatura")
        document.getElementById("result").innerHTML=" "}

    }      
                                    
