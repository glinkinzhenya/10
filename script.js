
cabbage = 8;
avocado = 30;
tomato = 10;

vegetables = [cabbage, avocado, tomato];


grapes = 20;
raspberry = 25;
coconut = 50;

fruits = [grapes, raspberry, coconut];



do {
    season = prompt("Выбери сезон winter или summer").toLowerCase();
    if (season !== "winter" && season !== "summer") {
        alert("Не точный ответ");
    }
} while (season !== "winter" && season !== "summer");
console.log(season);

do {
    category = prompt("А теперь выбери название категории vegetables или fruits").replaceAll(" ", "").toLowerCase();
    if (category !== "vegetables" && category !== "fruits") {
        alert("Не точный ответ");

    } if (category === "vegetables") {
        do {
            products = prompt("выбери продукт cabbage, avocado или tomato").replaceAll(" ", "").toLowerCase();
            if (products !== "cabbage" && products !== "avocado" && products !== "tomato") {
                alert("Не точный ответ");
            }
        } while (products !== "cabbage" && products !== "avocado" && products !== "tomato");

    } else if (category === "fruits") {
        do {
            products = prompt("выбери продукт grapes, raspberry или coconut").replaceAll(" ", "").toLowerCase();
            if (products !== "grapes" && products !== "raspberry" && products !== "coconut") {
                alert("Не точный ответ");
            }
        } while (products !== "grapes" && products !== "raspberry" && products !== "coconut");
    }


} while (category !== "vegetables" && category !== "fruits");


number = parseInt(prompt(`Отлично, Вы выбрали ${products}, а теперь введите их количество.`));
while (number < 1 || isNaN(number)) {
    alert("Не верный ответ");
    number = parseInt(prompt(`Отлично, Вы выбрали ${products}, а теперь введите их количество.`));
}
console.log(number);

if (category === "vegetables") {
    if (products === "cabbage") {
        sum = number * vegetables[0];
    } else if (products === "avocado") {
        sum = number * vegetables[1];
    } else if (products === "tomato") {
        sum = number * vegetables[2];
    }


} else if (category === "fruits") {
    if (products === "grapes") {
        sum = number * fruits[0];
    } else if (products === "raspberry") {
        sum = number * fruits[1];
    } else if (products === "coconut") {
        sum = number * fruits[2];
    }
}
console.log(`Сумма до времени года ${sum} грн`);


if (season === "winter") {
    sum = sum * 2;
} else if (season === "summer") {
    sum = sum * 0.8;
}

console.log(`Сумма после времени года ${sum} грн`);


document.write(`
<div class="product" align="center">
  <img src="images/${category}/${products}.svg" alt="${products}" width="100" height="100">
  <p>Selected product: <b>${products}</b></p>
  <p>Count of cabbages: <b>${number}</b></p>
  <p>Selected period: <b>${season}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${sum} UAH</b></p>
</div>
`);
