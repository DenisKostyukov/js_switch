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
/**
 * 
 * @param {number} a - first number
 * @param {number} b - second number
 * @param {string} operation - operation with numbers
 */
function calculator(a, b, operation) {
  switch(operation){
    case "+":{
      console.log(`${a}+${b}=`, a+b);
      break;
    }
    case "-":{
      console.log(`${a}-${b}=`, a-b);
      break;
    }
    case "/":{
      console.log(`${a}/${b}=`, a/b);
      break;
    }
    case "*":{
      console.log(`${a}*${b}=`, a*b);
      break;
    }
    case "^":{
      console.log(`${a}^${b}=`, a**b);
      break;
    }
    default:{
      console.log("Данной операции не существует")
    }
  }
}
calculator(firstNumber, secondNumber, operation);