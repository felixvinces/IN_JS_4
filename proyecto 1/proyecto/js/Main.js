class Numeros{

    
    Perfecto(){
        let c = 1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = " "
        let r = 0
        num = parseInt (num)
        while (c < num) {
        if (num % c == 0){
            r = r + c
            divisores = divisores + " " + c.toString ()
        }
       c = c + 1
        }
        if (num == r){
        resp.textContent = "El numero es Perferto"
    }else{
        resp.textContent = "El numero no es Perferto"
    }
    }
    
 
    
    Primo(){
        let num = document.getElementById("num").value
        num = parseFloat(num)
        let suma = 0
        let resp = []
  
        for (let i = 1; i <= num; i++) {
           if (num % i === 0) {
              resp.push(i);
           }
        }
     
        for (let i = 0; i < resp.length; i++) {
           suma += resp[i];
        }
        
        if (suma - 1 == num){
           document.getElementById("resp").textContent = `El número ${num} es primo`
        } else {
           document.getElementById("resp").textContent = `El número ${num} no es primo`
        }
     }
  

   
  
  
    
    Factorial(){
        let num = document.getElementById("num").value
        num = parseInt (num)
        let resp = document.getElementById("resp")
        let factorial = " "
        let c = 1
        while ( num >= 1 ) {
        c = c * num
        factorial = factorial + " " + c.toString()
        num = num - 1
        }
        resp.textContent = factorial 
    }
    
    Exponente(){
        let num = document.getElementById("num").value
        num = parseInt (num)
        let exp = document.getElementById("exp").value
        exp = parseInt (exp)
        let resp = document.getElementById("resp")
        let r = 1
        let c = 1
        for (let i = 1; i <= exp; i++) {
            c *= num;
        }
        resp.textContent = c //exponente
    } 
    
 
    
    Fibonacia(){       
    let num = document.getElementById("num").value        
    num = parseInt(num)
    let resp = document.getElementById("resp")
    let c = 0
    let a = 0 
    let b = 1
    let cont = 2
    let fibo = "0, 1"
    while (cont < num) {
        c = a + b
        a = b
        b = c
        cont = cont + 1
        fibo = fibo + ", " + c.toString()
    }
    resp.textContent = fibo
} 

fibonacciYPrimos() {
    const fibonacci = [1, 1];  
    let primos = 0;
    let resp = document.getElementById("resp")
  
   
    function esPrimo(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
  

    for (let i = 2; i < 10; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      if (esPrimo(fibonacci[i])) primos++;
    }
  
    resp.textContent = `Serie de Fibonacci: ${fibonacci} Cantidad de números primos: ${primos}`;
  }
  
  fibonacci() {
    let fib = [1, 1];
    let max = 100;
    
    while (fib.length < max) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    document.getElementById("resp").textContent = fib;
  }
  
  sumaParesProductoImpares() {
    let N = document.getElementById("num").value;
    let sumaPares = 0;
    let productoImpares = 0;
    
    for (let i = 1; i <= N; i++) {
      let par = 2 * i;
      let impar = 2 * i - 1;
      
      sumaPares += par;
    }
    
    for (let i = 1; i <= N; i++) {
      let impar = 2 * i - 1;
      
      if (i === 1) {
        productoImpares = impar;
      } else {
        productoImpares *= impar;
      }
    }
    document.getElementById("resp").textContent = `Suma de pares: ${sumaPares}, Producto de impares: ${productoImpares}`;
  }
  
  esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

    fibonacciPrimos() {
    let fib = [1,1,2,3,5,8,13,21,34,55];
    let contPrimos = 0;

    const esPrimo = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    for (let num of fib) {
      if (esPrimo(num)) {
        contPrimos++;
      }
    }
    document.getElementById("resp").textContent = `Serie de Fibonacci: ${fib}, Cantidad de números primos: ${contPrimos}`;
  }

sumaypromedofibonaci() {
    let fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    let suma = 0;
    let sumaPrimos = 0;
    let promedio = 0;
    let primos = [];

    const esPrimo = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    for (let num of fib) {
        suma += num;
        if (esPrimo(num)) {
            primos.push(num);
            sumaPrimos += num;
        }
    }
    promedio = sumaPrimos / primos.length;

    document.getElementById("resp").textContent = `Serie de Fibonacci: ${fib}, Números primos: ${primos}, Suma de primos: ${sumaPrimos}, Promedio de primos: ${promedio}`;
}



imprimirPrimos() {
    let primos = [];
    let num = 2;
    let cont1a10 = 0;
    let cont15a25 = 0;
    let primos1a10 = [];
    let primos15a25 = [];

    while (primos.length < 10) {
        if (this.esPrimo(num)) {
            primos.push(num);
            if (num >= 1 && num <= 10) {
                cont1a10++;
                primos1a10.push(num);
            }
            if (num >= 15 && num <= 25) {
                cont15a25++;
                primos15a25.push(num);
            }
        }
        num++;
    }

    document.getElementById("resp").textContent = `Numeros primos: ${primos}. Cantidad en [1,10]: ${cont1a10} (${primos1a10}), Cantidad en [15,25]: ${cont15a25} (${primos15a25})`;
}
    
comisiones(){
    let sueldo = document.getElementById("num").value
    sueldo = parseInt(sueldo)
    let venta1 = document.getElementById("num1").value
    venta1 = parseInt(venta1)
    let venta2 = document.getElementById("num2").value
    venta2 = parseInt(venta2)
    let venta3 = document.getElementById("num3").value
    venta3 = parseInt(venta3)

    let comision = venta1 * 0.10 + venta2 * 0.10 + venta3 * 0.10
    let total = sueldo + comision
    document.getElementById("resp").textContent = `El sueldo total es: ${total}`
}

multiplicarPorSumasSucesivas() {
   
    let resp = document.getElementById("resp");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    
    if (isNaN(num1) || isNaN(num2)) {
        resp.textContent = "Por favor, ingresa números válidos.";
        return;
    }

   
    let resultado = 0;
    let sumasSucesivas = "";

   
    if (num2 === 0) {
        resp.textContent = `El resultado de multiplicar ${num1} por ${num2} es: 0 (porque cualquier número multiplicado por 0 es 0)`;
        return;
    }

    
    for (let i = 0; i < num2; i++) {
        resultado += num1;
        sumasSucesivas += num1 + " + ";
    }

    
    sumasSucesivas = sumasSucesivas.slice(0, -3);

   
    resp.textContent = `El resultado de multiplicar ${num1} por ${num2} por sumas sucesivas es: ${resultado} (${sumasSucesivas})`;
}


maximoMinimo() {
    let valores = [parseInt(document.getElementById("num").value)];
    let valor;
    let resp = document.getElementById("resp");

    while (true) {
        valor = prompt("Ingrese un valor (o 's' para salir):");
        if (valor.toLowerCase() === 's') break;
        valores.push(parseInt(valor));
    }

    if (valores.length > 0) {
        let max = Math.max(...valores);
        let min = Math.min(...valores);
        resp.textContent = `El valor máximo ingresado es: ${max}, y el valor mínimo ingresado es: ${min}`;
    } else {
        resp.textContent = "No se ingresaron valores.";
    }
}

productoYPotencia() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let producto = this.multiplicarPorSumasSucesivas1(num1, num2);
    let potencia = this.calcularPotencia(num1, num2);

    document.getElementById("resp").textContent = `El producto de ${num1} y ${num2} es: ${producto}, y la potencia ${num1}^${num2} es: ${potencia}`;
}

multiplicarPorSumasSucesivas1(num1, num2) {
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }
    return resultado;
}

calcularPotencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

convertirCalificacion() {
    let nota = parseInt(document.getElementById("num").value);
    let resp = document.getElementById("resp");
    let calificacion;

    if (nota >= 19 && nota <= 20) {
        calificacion = "SOBRESALIENTE";
    } else if (nota >= 16 && nota <= 18) {
        calificacion = "MUY BUENO";
    } else if (nota >= 13 && nota <= 15) {
        calificacion = "BUENO";
    } else if (nota >= 10 && nota <= 12) {
        calificacion = "REGULAR";
    } else if (nota >= 1 && nota <= 9) {
        calificacion = "DEFICIENTE";
    } else {
        calificacion = "Nota fuera de rango";
    }

    resp.textContent = `La calificación es: ${calificacion}`;
}


}

const numero = new Numeros();
