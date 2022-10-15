// создать функцию которая генерирует массив с числами в диапазоне от и до
function getRangeNumbers(from = 1, to = 25) {
    let range = getValueOfArguments(from, to);
    from = range.from;
    to = range.to;
    range = [];
    try {
        while (from <= to) {
            range.push(from)
            from++
        }
        return range;
    }
    catch (err) {
        console.log(err)
    }
}


function takeNumber(arr) {
    let msg;

    while (arr.length > 0) {
        msg = arr.splice(getRandomNum(arr.length), 1);
        console.log(...msg)
    }
}
