//variables
var btnValue = "";
var $compScreen = $("#comp-screen p");
var $resultScreen = $("#result-screen h1");
var output = "";
var numberOutput = "";
var numberStoredA = 0;
var numberStoredB = 0;

$("button").click(function(){
  //get value of button through clicking
  btnValue = $(this).text();
  
  //concat output & numberOutput per click
  output += btnValue;
  numberOutput +=btnValue;
  
  //clear screens
  if(btnValue == "C") {
    output = "";
    numberOutput = "";
    $compScreen.text(" ");
    $resultScreen.text(" ");
  }
  
  //backspace
  if(btnValue == "") {
    output = output.substr(0, output.length - 1);
    numberOutput = output.substr(0, numberOutput.length - 1);
    $compScreen.text(output);
    //$resultScreen.text(output);
  }
  
  //if equal
  if(btnValue == "=") {
    //convert to float if decimal
    if(numberOutput.indexOf(".")  != -1) {
      numberStoredB = parseFloat(numberOutput);

    }else {
      numberStoredB = parseInt(numberOutput);
    }
    //show computation on screen
    $compScreen.text(output);
    
    //replace = with ""
    output = output.replace("=","");
    //evaluate string to mathematical expression
    $resultScreen.text(eval(output)); 

    output = " ";
    numberOutput = " ";
    
  }
  
  //if numbers
  if(btnValue == "0" || btnValue == "1" || btnValue == "2" || btnValue == "3" || btnValue == "4" || btnValue == "5" || btnValue == "6" || btnValue == "7" || btnValue == "8" || btnValue == "9") {
    if(output == " " && numberOutput == " ") {
      $compScreen.text(" ");
      $resultScreen.text(" ");   
    }
    
    $compScreen.text(output);
  }  
  
  //if operators
  if(btnValue == "÷" || btnValue == "x" || btnValue == "-" || btnValue == "+") {
    if(numberOutput.indexOf(".")  != -1) {
      numberStoredA = parseFloat(numberOutput);

    }else {
      numberStoredA = parseInt(numberOutput);
    } 
    numberOutput = "";
      
    $compScreen.text(output);

  } 
  
});  




