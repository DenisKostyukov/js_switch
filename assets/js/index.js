const dayInput = +prompt("Введите день месяца");
switch (true) {
  case dayInput > 0 && dayInput <= 10: {
    console.log("1 декада");
    break;
  }
  case (dayInput > 10 && dayInput <= 20): {
    console.log("2 декада");
    break;
  }
  case (dayInput > 20 && dayInput <= 31): {
    console.log("3 декада");
    break;
  }
  default: {
    console.log("Такого дня месяца не существует");
  }
}
const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");
const operation = prompt("Введите операцию: \n \" + \" - Сложение;\n \" - \" - Вычетание;\n \" / \" - Деление;\n \" * \" - Умножение;\n \" ^ \" - Возведение в степень;")
function sum(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}
function exp(a,b){
  return a**b;
}
const mainFunction=function(a,b,operationFunc){
  const result=operationFunc(a,b);
  console.log(operationFunc);
  return result;
}
function calculator(operation) {
  switch(operation){
    case "+":{
      return mainFunction(firstNumber, secondNumber,sum);
    }
    case "-":{
      return mainFunction(firstNumber, secondNumber,sub);
    }
    case "/":{
      return mainFunction(firstNumber, secondNumber,div);
    }
    case "*":{
      return mainFunction(firstNumber, secondNumber,mul);
    }
    case "^":{
      return mainFunction(firstNumber, secondNumber,exp);

    }
    default:{
      return "Данной операции не существует";
    }
  }
}
console.log(calculator(operation));