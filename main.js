 var userAge = +prompt ('Введите свой возраст');

 if (userAge < 18) {
 alert('Вы еще молоды вам нужно учиться');
 }else if (userAge > 18 && userAge < 50 )
   alert('Вам нужно работать')
else if (userAge > 50 && userAge < 59 )
   alert('Вам скоро на персию')
 else if (userAge > 59 && userAge < 100 )
  alert('Вы пенсионер')
 else (userAge > 100 ) 
     alert('Что-то пошло не так');



 var time = +prompt ('Вести время в цифрах');

switch (time) {
     case 1:
         alert('1 час ночи');
         break;
     case 2:
     alert('2 часa ночи');
         break;
      case 3:
         alert('3 часa ночи');
            break;
     case 4:
        alert('4 часa ночи');
             break;
    case 5:
        alert('5 часa ночи');
            break;
    case 6:
       alert('6 часа ночи');
           break;
    case 7:
        alert('7 часов утра');
           break;
    case 8:
       alert('8 часов утра');
            break;
      case 9:
         alert('9 часов утра');
             break;
      case 10:
         alert('10 часов утра');
             break;
      case 11:
         alert('11 часов утра');
             break;
      case 12:
         alert('12 часа дня');
          break;
     case 13:
        alert('13 часа дня');
            break;
      case 14:
         alert('14 часа дня');
             break;
     case 15:
         alert('15 часа дня');
             break;
      case 16:
         alert('16 часа дня');
             break;
      case 17:
         alert('17 часа дня');
             break;
     case 18:
         alert('18 часов вечера');
             break;
      case 19:
         alert('19 часов вечера');
             break;
      case 20:
         alert('20 часов вечера');
             break;
      case 21:
         alert('21 часов вечера');
             break;
      case 22:
        alert('22 часов вечера');
             break;
      case 23:
         alert('23 часов вечера');
            break;
      case 00:
         alert('12 часов ночи');
            break;
 }


var num1 = +prompt('Введите первое число'); // 2
var num2 = +prompt('Введите второе число'); // 1
var num3 = +prompt('Введите третье число'); // 3 

if(num1 < num2 && num3 > num2){
    alert ('Среднее число '+ num2)
}else if (num2 < num1 && num3 > num1){
    alert('Среднее число ' + num1)
}else if (num1 < num3 && num2 > num3){
    alert('Среднее число ' + num3)
}

