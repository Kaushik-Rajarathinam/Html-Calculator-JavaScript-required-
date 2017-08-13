  //THIS DATA IS RAW. Copied from the original project.
  
  
  // Script Powered by Upolies.Co
    function add() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
var sum=number1+number2;
document.getElementById("result").value=sum;

  }

    function subtract() {
      var number1 = parseInt(document.getElementById("number1").value);
      var number2 = parseInt(document.getElementById("number2").value);
  var subtract=number1-number2;
  document.getElementById("result").value=subtract;
    }

    function multiply() {
      var number1 = parseInt(document.getElementById("number1").value);
      var number2 = parseInt(document.getElementById("number2").value);
  var multiply=number1*number2;
  document.getElementById("result").value=multiply;
    }

    function divide() {
      var number1 = parseInt(document.getElementById("number1").value);
      var number2 = parseInt(document.getElementById("number2").value);
  var divide=number1/number2;
  document.getElementById("result").value=divide;
    }

    function reset() {
      document.getElementById("number1").value="";
      document.getElementById("number2").value="";
      document.getElementById("result").value="";
    }



  // Copyright(c) Upolies.Co
