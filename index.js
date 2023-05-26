//1
const task1InputOne = document.querySelector(".wrap1__input");
const task1Text = document.querySelector(".wrap1__text");

task1InputOne.addEventListener("blur", (e) => {
  const value = e.target.value;
  task1Text.innerHTML = task1Text.innerHTML += value;
});

//2
const task2InputOne = document.querySelector(".wrap2__iput1");
const task2InputTwo = document.querySelector(".wrap2__iput2");
const task2Text = document.querySelector(".wrap2__text");
const task2Btn = document.querySelector(".wrap2__btn");

task2Btn.addEventListener("click", () => {
  task2Text.innerHTML =
    Number(task2InputOne.value) + Number(task2InputTwo.value);
});

//3
const task3Input = document.querySelector(".wrap3__input");
const task3Text = document.querySelector(".wrap3__text");

task3Input.addEventListener("blur", (e) => {
  const value = e.target.value;
  const result = value
    .split("")
    .map((item) => +item)
    .reduce((acc, num) => acc + num);
  task3Text.innerHTML = result;
});

//4
const task4Input = document.querySelector(".wrap4__input");
const task4Text = document.querySelector(".wrap4__text");

task4Input.addEventListener("blur", (e) => {
  const value = e.target.value;
  const sum = value
    .split(",")
    .map((item) => +item)
    .reduce((acc, num) => acc + num);

  const count = value.split(",").length;
  task4Text.innerHTML = sum / count;
});

//5
const task5Input1 = document.querySelector(".wrap5__input1");
const task5Input2 = document.querySelector(".wrap5__input2");
const task5Input3 = document.querySelector(".wrap5__input3");
const task5Input4 = document.querySelector(".wrap5__input4");

task5Input1.addEventListener("blur", (e) => {
  const value = e.target.value;
  const person = value.split(" ");

  task5Input2.value = person[0];
  task5Input3.value = person[1];
  task5Input4.value = person[2];
});

//6
const task6Input = document.querySelector(".wrap6__input");

task6Input.addEventListener("blur", (e) => {
  let value = e.target.value;
  const res = value
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  task6Input.value = res;
});

//7
const task7Input = document.querySelector(".wrap7__input");
const task7Text = document.querySelector(".wrap7__text");

task7Input.addEventListener("blur", (e) => {
  const value = e.target.value;
  const res = value.split(" ").length;
  task7Input.value = res;
});

//8
const task8Input = document.querySelector(".wrap8__input");
task8Input.addEventListener("blur", (e) => {
  const value = e.target.value.replace(/ /g, "");
  const res = value.split(".").reverse().join("-");
  task8Input.value = res;
});

//9
const task9Input = document.querySelector(".wrap9__input");
const task9Text = document.querySelector(".wrap9__text");

task9Input.addEventListener("click", () => {
  const value = task9Input.value;

  for (let i = 0; i < value.length / 2; i++) {
    if (value[i] !== value[value.length - 1 - i]) {
      text.innerHTML = "no";
    } else {
      text.innerHTML = "yes";
    }
  }
});

//10
const task10Input = document.querySelector(".wrap10__input");
const task10Text = document.querySelector(".wrap10__text");

task10Input.addEventListener("blur", (e) => {
  const value = e.target.value;
  value.indexOf(3) === -1
    ? (task10Text.innerHTML = "no")
    : (task10Text.innerHTML = "yes");
});

//11
const task11Btn = document.querySelector(".wrap11__btn");
const task11arr = document.querySelectorAll(".wrap11__text");

task11Btn.addEventListener("click", () => {
  task11arr.forEach((elem, i) => {
    elem.innerHTML += i + 1;
  });
});

//12
const wrap12 = document.querySelector(".wrap12");
const wrap12arr = document.querySelectorAll(".wrap12__text");

wrap12.addEventListener("click", (e) => {
  if (e.target.classList.contains("wrap12__text")) {
    e.target.innerHTML =
      Number(e.target.innerHTML) * Number(e.target.innerHTML);
  }
});

///13
const task13Input = document.querySelector(".wrap13__input");
const task13Text = document.querySelector(".wrap13__text");

task13Input.addEventListener("blur", (e) => {
  const value = e.target.value;
  const newValue = value.split(".").reverse().join(",");
  //в дате неделя начинется с воскресенья
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const date = new Date(newValue);
  const num = date.getDay();

  task13Text.innerHTML = days[num];
});

//14

const task14Input = document.querySelector(".wrap14__input");
const task14BtnPLus = document.querySelector(".wrap14__btnPlus");
const task14BtnMinus = document.querySelector(".wrap14__btnMinus");

let counter = 0;
task14Input.value = counter;

task14BtnPLus.addEventListener("click", () => {
  counter++;
  task14Input.value = counter;
});

task14BtnMinus.addEventListener("click", () => {
  if (counter === 0) {
    counter = 0;
  } else {
    counter--;
    task14Input.value = counter;
  }
});

//15
const task15Wrap = document.querySelector(".wrap15");
const task15Input = document.querySelector(".wrap15__input");

let counterText = 0;
task15Input.innerHTML = counterText;

task15Wrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("wrap15__text")) {
    counterText++;
    task15Input.value = counterText;
    console.log(counterText);
  }
});

//16
const task16Wrap = document.querySelector(".wrap16");
const task16AllText = task16Wrap.querySelectorAll("p");

task16Wrap.addEventListener("click", () => {
  task16AllText.forEach((string) => {
    let str = string.innerHTML;
    str.length > 10 ? (str = str.slice(0, 10) + "...") : str;
    string.innerHTML = str;
  });
});

//17
const task17Input = document.querySelector(".wrap17__input");

task17Input.addEventListener("blur", () => {
  task17Input.value > 0 && task17Input.value <= 100
    ? (task17Input.style.backgroundColor = "green")
    : (task17Input.style.backgroundColor = "red");
});

//18

const task18Input = document.querySelector(".wrap18__input");
const task18Btn = document.querySelector(".wrap18__btn");

task18Btn.addEventListener("click", () => {
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += Math.ceil(Math.random() * (36 - 1) + 1).toString(36);
  }
  task18Input.value = result;
});
