function verificar(form) {
    
    var numOK = "1234567890.";
    var p1 = form.p1.value;
    var p2 = form.p2.value;
    var p3 = form.p3.value;
    var ef = form.ef.value;
    var tf = form.tf.value;
    var allValido = true;

    for(var i = 0; i < p1.length; i++){
        var caracteres = p1.charAt(i);
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
        form.p1.focus();
        return false;
    } else {
        for(var i = 0; i < p2.length; i++){
            var caracteres = p2.charAt(i);
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
            form.p2.focus();
            return false;
        } else {
            for(var i = 0; i < p3.length; i++){
                var caracteres = p3.charAt(i);
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
                form.p3.focus();
                return false;
            } else {
                for(var i = 0; i < ef.length; i++){
                    var caracteres = ef.charAt(i);
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
                    form.ef.focus();
                    return false;
                } else {
                    for(var i = 0; i < tf.length; i++){
                        var caracteres = tf.charAt(i);
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
                        form.tf.focus();
                        return false;
                    } else {
                        var promedio = ((parseFloat(p1) + parseFloat(p2) + parseFloat(p3))/3)*(11/20);
                        var examen = parseFloat(ef)*(3/10);
                        var trabajo = parseFloat(tf)*(3/20);
                        var calificacionf = parseFloat(promedio) + parseFloat(examen) + parseFloat(trabajo);
                        alert("Tu calificacion final es de: " + calificacionf);
                    }
                }
            }
        }
    }

}