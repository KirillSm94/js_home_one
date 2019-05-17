'use strict';

console.log('Первая задача: ');

let ar = 10,
    a_one = 15,
    b_one = 25,
    sGr,
    sAll,
    howMuchGr,
    howMuchUnusedS;


sAll = ar * 100;
console.log(`Площадь участка ${ar} соток равна ${sAll} кв.м.`);
sGr = a_one * b_one;
console.log(`Площадь одной грядки 15х25 равна ${sGr} кв.м.`);
howMuchGr = Math.floor(sAll / sGr);
console.log(`Целых грядок вмещается ${howMuchGr}`);
howMuchUnusedS = (sAll - (sGr * howMuchGr));
console.log(`Свободной площади остается ${howMuchUnusedS} кв.м.`);

//---------------------------------------------------------------------------------

console.log('Вторая задача: ');
let sBigEllipseDm2 = 15,
    sSmallEllipseSm2 = 600,
    sBigEllipseM2,
    sSmallEllipseM2,
    sRing;


sBigEllipseM2 = sBigEllipseDm2 * 0.01;
console.log(`Площадь эллипса, из которого вырезают, равна: ${sBigEllipseM2} кв.м.`);
sSmallEllipseM2 = sSmallEllipseSm2 * 0.0001;
console.log(`Площадь эллипса, который вырезают, равна: ${sSmallEllipseM2.toFixed(2)} кв.м.`);
sRing = sBigEllipseM2 - sSmallEllipseM2;
console.log(`Площадь кольца равна: ${sRing} кв.м.`);

//--------------------------------------------------------------------------------------
alert('Третья задача (первая и вторая в консоли)');

let one = +prompt('Введите первое число'),
    two = +prompt('Введите второе число'),
    three = +prompt('Введите третье число'),
    result_one;


result_one = (one < two && one <= three) ? `Наименьшее число ${one}` :
                (two <= one && two < three)  ? `Наименьшее число ${two}` :
                    (three < one && three <= two) ? `Наименьшее число ${three}` : 'Все числа равны или вы ничего не ввели';

alert(result_one);

//----------------------------------------------------------------------------------------
alert('Четвертая задача');

let m = +prompt('Введите первое число'),
    n = +prompt('Введите второе число'),
    deltaM,
    deltaN;

deltaM = Math.abs(10 - m);
deltaN = Math.abs(10 - n);

let result_two = (deltaM > deltaN) ? `Ближайшее к 10 было ${n}` :
             (deltaN > deltaM) ? `Ближайшее к 10 было ${m}` : 'До 10 двум числам один шаг или вы ничего не ввели';

alert(result_two);


//-----------------------------------------------------------------------------------------------
alert('Пятая задача');
let a = prompt('Введите координаты первой вершины', 'x, y, z'),
    b = prompt('Введите координаты второй вершины', 'x, y, z'),
    c = prompt('Введите координаты третьей вершины', 'x, y, z');

let arrA = a.split(','),
    arrB = b.split(','),
    arrC = c.split(',');

arrA[0] = +arrA[0];
arrA[1] = +arrA[1];
arrA[2] = +arrA[2];

arrB[0] = +arrB[0];
arrB[1] = +arrB[1];
arrB[2] = +arrB[2];

arrC[0] = +arrC[0];
arrC[1] = +arrC[1];
arrC[2] = +arrC[2];

let ab = [arrB[0] - arrA[0], arrB[1] - arrA[1], arrB[2] - arrA[2]],
    ac = [arrC[0] - arrA[0], arrC[1] - arrA[1], arrC[2] - arrA[2]],
    bc = [arrC[0] - arrB[0], arrC[1] - arrB[1], arrC[2] - arrB[2]],
    ba = [arrA[0] - arrB[0], arrA[1] - arrB[1], arrA[2] - arrB[2]],
    cb = [arrB[0] - arrC[0], arrB[1] - arrC[1], arrB[2] - arrC[2]],
    ca = [arrA[0] - arrC[0], arrA[1] - arrC[1], arrA[2] - arrC[2]],
    absAb = Math.sqrt(Math.pow(ab[0], 2) + Math.pow(ab[1], 2) + Math.pow(ab[2], 2)),
    absAc = Math.sqrt(Math.pow(ac[0], 2) + Math.pow(ac[1], 2) + Math.pow(ac[2], 2)),
    absBc = Math.sqrt(Math.pow(bc[0], 2) + Math.pow(bc[1], 2) + Math.pow(bc[2], 2)),
    absBa = Math.sqrt(Math.pow(ba[0], 2) + Math.pow(ba[1], 2) + Math.pow(ba[2], 2)),
    absCb = Math.sqrt(Math.pow(cb[0], 2) + Math.pow(cb[1], 2) + Math.pow(cb[2], 2)),
    absCa = Math.sqrt(Math.pow(ca[0], 2) + Math.pow(ca[1], 2) + Math.pow(ca[2], 2));

console.log(`Координаты вектора AB(x, y, z) = ${ab} `);
console.log(`Координаты вектора AC(x, y, z) = ${ac} `);
console.log(`Координаты вектора BC(x, y, z) = ${bc} `);
console.log(`Координаты вектора BA(x, y, z) = ${ba} `);
console.log(`Координаты вектора CB(x, y, z) = ${cb} `);
console.log(`Координаты вектора CA(x, y, z) = ${ca} `);

console.log(`Длина AB(x, y, z) = ${absAb} `);
console.log(`Длина AC(x, y, z) = ${absAc} `);
console.log(`Длина BC(x, y, z) = ${absBc} `);
console.log(`Длина BA(x, y, z) = ${absBa} `);
console.log(`Длина CB(x, y, z) = ${absCb} `);
console.log(`Длина CA(x, y, z) = ${absCa} `);


let angleAbAc = Math.acos(((ab[0] * ac[0]) + (ab[1] * ac[1]) + (ab[2] * ac[2])) / (absAb * absAc)),
    angleBaBc = Math.acos(((ba[0] * bc[0]) + (ba[1] * bc[1]) + (ba[2] * bc[2])) / (absBa * absBc)),
    angleCaCb = Math.acos(((ca[0] * cb[0]) + (ca[1] * cb[1]) + (ca[2] * cb[2])) / (absCa * absCb));


console.log(`Угол между АВ и АС = ${angleAbAc} рад.`);
console.log(`Угол между BA и BC = ${angleBaBc} рад.`);
console.log(`Угол между CA и CB = ${angleCaCb} рад.`);

let anglePrDeg = 90 * Math.PI / 180;
console.log(`Угол в 90 градусов в радианах равен ${anglePrDeg} рад.`);

let result_three = (angleAbAc === anglePrDeg || angleBaBc === anglePrDeg || angleCaCb === anglePrDeg) ? 'Треугольник прямоугольный' : 'Треугольник не прямоугольный';

console.log(result_three);
