// ЗАДАНИЕ 5.1

function buttonClick(){
    let input_x = document.getElementById('kor_x');//Берем значение из инпута по ID
    let input_y = document.getElementById('kor_y');//Берем значение из инпута по ID
    let x = Number(input_x.value);//Говорим программе , что это значение - число
    let y = Number(input_y.value);//Говорим программе , что это значение - число
    if (x <= -2 && y>= 2){// Далее по условию рисунка проверяем расположение точек на осях
        alert("Точка принадлежит заштрихованной области");// вывод данных через Alert
    }else if (x >= 2 && y <= -2) {
        alert("Точка принадлежит заштрихованной области");
    }else {
        alert("Точка не принадлежит заштрихованной области");
    }

}

function clr(){
    document.getElementById('kor_x').value = "";//Кнопка для очищения значения в инпутах
    document.getElementById('kor_y').value = "";//Кнопка для очищения значения в инпутах
}


// Задание 5.2

function zadanie2(){
    let input_y = document.getElementById('z2_y');//Берем значение из инпута по ID
    let text = document.getElementById('textareaz1');//Объявляем переменную для вывода в текстовое поле 
    let y = Number(input_y.value);
    let a = null;
    text.disabled = true;//Блокировка текстового поля
    for (let x = -1.7; x <= 1.7; x += 0.2){//Цикл для подсчета результатов а заданном диапазоне
        a = (1 + x)*((x+y)/(x*x+4))//Фрмула
        text.innerHTML = text.innerHTML + ' x = ' + (x.toFixed(2)) + '; a = ' + (a.toFixed(2)) + '\n';// Вывод значений
    }
}

function clr2(){
    document.getElementById('textareaz1').value = "";//Очистка значений
    document.getElementById('textareaz1').disabled = false;
    document.getElementById('z2_y').value = "";
}

// Задание 5.3

function zadanie3(){
    let input_x = document.getElementById('z3_x');
    let x = Number(input_x.value);
    let fx = null;
    if (x <= 2){//По условию задачи подбираем формулу , по которой будет расчет
        fx = x * x + 4 * x + 5;
        alert('F(x) = ' + fx.toFixed(2))
    }else {
        fx = 1 / (x * x + 4 * x + 5);
        alert('F(x) = ' + fx.toFixed(2))
    }
}

function clr3(){
    document.getElementById('z3_x').value = "";
}

// Задание 4.5

function zadanie4(){
    min = 100.0;//Задаем занчение минимальному элементу (я задал большое значение с плавающей точкой , что бы программа сразу определила нужный нам тип данных и в результате не было 0)
    let text = document.getElementById('textareaz4');
    text.innerHTML = text.innerHTML + '||============================||' + '\n';// рисуем табличку
    text.innerHTML = text.innerHTML + '||      x      ||      y      ||' + '\n';
    text.innerHTML = text.innerHTML + '||============================||' + '\n';
    for (let x = -3.7; x <= 3.7; x +=0.2){
        y = Math.sin(x)*Math.sin(x)+(Math.sin(x+Math.cos(x)))/5.1;
        if (y < min){// проверяем каждый посчитанный элемент , если он меньше минимального, то задаем ему соответствующее значение
            min = y;
        }
        text.innerHTML = text.innerHTML + '||    '+x.toFixed(2)+'    ||     '+y.toFixed(2)+'    ||' + '\n';//выводим данные с двумя знаками после запятой
    }
    text.innerHTML = text.innerHTML + '||===========================||' + '\n';
    text.innerHTML = text.innerHTML + 'Наименьшее значение Y: ' + y.toFixed(2);
}

function clr4(){
    document.getElementById('textareaz4').value = "";
}

// Задание 4.1 array

function zadanie5(){
    let arr = [];//Объявляем массив
    let input_n = document.getElementById('z5_n');
    let n = Number(input_n.value);

    for (i = 0; i < n; i++){//Цикл для заполнения массива рандомными числами от 10 до 100
        arr[i] = new Array();
        for (j = 0; j < n; j++){
            arr[i][j]=Math.floor(Math.random()*90 + 10);
        }
    }

    let min = arr[0][0];//Цикл для поиска минимальной строки в массиве
    let s = 0;
    for (i = 0; i < n; i++){
        for (j = 0; j < n; j++){
            if (arr[i][j] < min){
                min = arr[i][j];
                s = i;
            }
        }
    }

    let sum = 0;//Цикл для суммирования элементов строки с минимальным элементом в массиве
    for (i = 0; i < n; i++){
        sum += arr[s][i]
    }

    console.log(arr);//вывод массива для проверки правильности работы программы
    console.log(sum);//вывод суммы элементов строки с минимальным значением массива
}
