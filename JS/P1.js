function verificar(form) {
    
    var numOK = "1234567890.";
    var capital = form.capital.value;
    var allValido = true;

    for(var i = 0; i < capital.length; i++){
        var caracteres = capital.charAt(i);
        for (var j = 0; j < numOK.length; j++) {
            if (caracteres == numOK.charAt(j)) {
                break;
            }
        }
        if (j == numOK.length) {
            allValido = false;
            break;
        }
    }

    if (!allValido) {
        alert("Escriba unicamente numeros en el campo");
        form.capital.focus();
        return false;
    } else {
        var capital = form.capital.value;
        var resultado = parseFloat(capital) + parseFloat(capital*(1/50));
        alert("El resultado es: " + resultado);
    }

}