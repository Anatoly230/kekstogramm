console.log("hi")

function getValueOfArguments(from, to) {
    if (typeof from !== "number") {
        return false;
    }
    if (from < 0) {
        from = Math.abs(from);
    }
    if (from > to) {
        [from, to] = [to, from]
    }

    return {
        from: from,
        to: to
    }
}

function getRandomNum(from = 1000, to = 0) {
    let range = getValueOfArguments(from, to);
    return Math.floor(Math.random() * (range.to - range.from + 1)) + range.from;
}

function getRandomFloat(from = 1000, to = 0, countNum = 3) {
    let range = getValueOfArguments(from, to);
    return Number((Math.random() * (range.to - range.from + 1) + range.from).toFixed(countNum));
}

getRandomNum(3, 0);

function defineStringLength(str, charCount) {
    if (str.length > charCount) {
        return false;
    }
    return true;
}