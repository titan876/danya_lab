// ЗАДАНИЕ 5.1

function buttonClick(){
    var input_x = document.getElementById('kor_x');
    var input_y = document.getElementById('kor_y');
    var x = Number(input_x.value);
    var y = Number(input_y.value);
    if (x <= -2 && y>= 2){
        alert("Точка принадлежит заштрихованной области");
    }else if (x >= 2 && y <= -2) {
        alert("Точка принадлежит заштрихованной области");
    }else {
        alert("Точка не принадлежит заштрихованной области");
    }

}

function clr(){
    document.getElementById('kor_x').value = "";
    document.getElementById('kor_y').value = "";
}


// Задание 5.2

function zadanie2(){
    var input_y = document.getElementById('z2_y');
    var text = document.getElementById('textareaz1');
    var y = Number(input_y.value);
    var a = null;
    text.disabled = true;
    for (var x = -1.7; x <= 1.7; x += 0.2){
        a = (1 + x)*((x+y)/(x*x+4))
        text.innerHTML = text.innerHTML + ' x = ' + (x.toFixed(2)) + '; a = ' + (a.toFixed(2)) + '\n';
    }
}

function clr2(){
    document.getElementById('textareaz1').value = "";
    document.getElementById('textareaz1').disabled = false;
    document.getElementById('z2_y').value = "";
}

// Задание 5.3

function zadanie3(){
    var input_x = document.getElementById('z3_x');
    var x = Number(input_x.value);
    var fx = null;
    if (x <= 2){
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
    min = 100.0;
    var text = document.getElementById('textareaz4');
    text.innerHTML = text.innerHTML + '||============================||' + '\n';
    text.innerHTML = text.innerHTML + '||      x      ||      y      ||' + '\n';
    text.innerHTML = text.innerHTML + '||============================||' + '\n';
    for (var x = -3.7; x <= 3.7; x +=0.2){
        y = Math.sin(x)*Math.sin(x)+(Math.sin(x+Math.cos(x)))/5.1;
        if (y < min){
            min = y;
        }
        text.innerHTML = text.innerHTML + '||    '+x.toFixed(2)+'    ||     '+y.toFixed(2)+'    ||' + '\n';
    }
    text.innerHTML = text.innerHTML + '||===========================||' + '\n';
    text.innerHTML = text.innerHTML + 'Наименьшее значение Y: ' + y.toFixed(2);
}

function clr4(){
    document.getElementById('textareaz4').value = "";
}