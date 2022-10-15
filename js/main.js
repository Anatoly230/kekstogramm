console.log("hi")

function getValueOfArguments(from, to) {
  if (typeof from !== "number") {
    return false;
  }
  if (from < 0) {
    from = Math.abs(from);
  }
  if (from > to) {
    [from, to] = [to, from];
  }

  return {
    from: from,
    to: to
  }
}

function getRandomNum(from = 1000, to = 0) {
  try {
    let range = getValueOfArguments(from, to);
    from = range.from,
      to = range.to;
    range = null;
    return Math.floor(Math.random() * (to - from + 1)) + from;
  } catch (err) {
    console.log(err)
    return false;
  }

}

function getRandomFloat(from = 1000, to = 0, countNum = 3) {
  try {
    let range = getValueOfArguments(from, to);
    from = range.from,
      to = range.to;
    range = null;
    return Number((Math.random() * (to - from + 1) + from).toFixed(countNum));
  } catch (err) {
    console.log(err.stack);
    return false;
  }
}

getRandomNum(3, 0);

function defineStringLength(str, charCount) {
  if (str.length > charCount) {
    return false;
  }
  return true;
}

let arr = ["привет", "как", "дела?"]
console.log(arr["2-2"])

function makeCount() {
  let count = 0,
    str = "Привет, я лексическое окружение функции, которые возвращает эта, изменений "
  return function () {
    console.log(count++, str + count)
  }
}

// let counter = makeCount();

// counter();
// counter();

