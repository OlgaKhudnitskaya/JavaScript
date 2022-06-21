 //1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
age_2 = 18;
age_3 = 60;
checkAge = function(age) {
if (age < age_2) {
    console.log("You don’t have access cause your age is" + " " + age + " It’s less then");
} else if (age >= age_2 && age < age_3) {
    console.log("Welcome  !");
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");  
}
}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17)
checkAge(18)
checkAge(61)

//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
age_2 = 18;
age_3 = 60;
checkAge = function(age) {
 if (typeof age =='number') {
  if (age < age_2) {
    console.log("You don’t have access cause your age is" + " " + age + " It’s less then");
  } else if (age >= age_2 && age < age_3) {
    console.log("Welcome  !");
  } else if (age > age_3) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");  
  }
} else console.log("Error")
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge('five')
