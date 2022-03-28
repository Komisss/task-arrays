/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let array = Array.from(data.split(','));
    array = array.map(parseFloat);

    array.sort(function compareNumbers(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });

    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i] + ',';
    }

    result = result.substring(0, result.length - 1);

    return result;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let array = data.filter(function (n) {
        return n <= 100;
    });

    return array;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arrayResult = [];
    for (let i = 0, j = 0; i < array1.length; i++) {
        arrayResult[j++] = array1[i];
        arrayResult[j++] = array2[i];
    }
    return arrayResult;
}
