let firstName = [
  "Саша",
  "Петя",
  "Вася",
  "Антон",
  "Федор",
  "Матвей",
  "Игнатий",
  "Юра",
  "Авдотий",
  "Митрофан",
  "Степанидий",
];
let lastName = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Смирнов",
  "Игнатьев",
  "Фродлов",
  "Соколов",
  "Уткин",
  "Соловьев",
  "Пользовавтелев",
  "Васильев",
];

//генератор даты рождения
let DateGenerator = require("random-date-generator");
DateGenerator.getRandomDate();
let startDate = new Date(1969, 2, 2);
let endDate = new Date(2000, 3, 3);

//рендомные имена из массива
function allRandomUsers(Array1, Array2) {
  let result = [];
  for (let i = 0; i < Array1.length; i++) {
    for (let k = 0; k < Array2.length; k++) {
      result.push({
        id: Date.now(),
        name: `${Array1[i]} ${Array2[k]}`,
        date: DateGenerator.getRandomDateInRange(startDate, endDate),
      });
    }
  }
  return result;
}

let usersArr = allRandomUsers(firstName, lastName);

console.log(usersArr);

export default 

    usersArr;
