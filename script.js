const MathUtils = (function() {

    function factorial(n) {
           if (n < 0) {
               throw new Error("O número deve ser um inteiro positivo.");
           }
           if (n === 0 || n === 1) {
               return 1;
           }
           let result = 1;
           for (let i = 2; i <= n; i++) {
               result *= i;
           }
           return result;
       }
   
    function fibonacciSequence(max) {
           if (max < 0) {
               throw new Error("O número deve ser um inteiro positivo.");
           }
           const sequence = [];
           let a = 0, b = 1;
           while (a <= max) {
               sequence.push(a);
               [a, b] = [b, a + b];
           }
           return sequence;
       }
   
    function calculate(n) {
           if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
               throw new Error("A entrada deve ser um número inteiro positivo.");
           }
           return {
               factorial: factorial(n),
               fibonacci: fibonacciSequence(n)
           };
       }
   
       return {
           calculate
       };
   })();
   
   
   try {
       const number = 5; 
       const result = MathUtils.calculate(number);
       console.log(`Fatorial de ${number}: ${result.factorial}`);
       console.log(`Sequência de Fibonacci até ${number}: ${result.fibonacci}`);
   } catch (error) {
       console.error(error.message);
   }