// входные данные
const MESSAGES = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
],
    NAMES = [
        "Толя",
        "Андрей",
        "Маргарита",
        "Эльмира",
        "Зульфия",
        "Юлия",
        "Анастасия",
        "Валенитна",
        "Мария",
        "Ольга",
        "Вадим",
        "Борис",
        "Павел",
        "Станислав",
        "Василий",
        "Николай",
        "Дмитрий",
        "Макс"],
    DESCRIPTIONS = [
        "Смейтесь как только умеете, любите столько, сколько живете.",
        "Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.",
        "Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.",
        "Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.",
        "Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.",
        "Улыбка — единственный тренд в моде, который актуален всегда.",
        "Никогда не ищите свое счастье там, где вы его однажды потеряли.",
        "Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.Моя жизнь меняется, потому что меняю ее я.",
        "Всегда начинайте свой день с хороших людей и кофе.",
        "Ни о чем не беспокойтесь.",
        "Потому что все лучшие умы на работе.",
        "Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.",
        "Живите во всех тех моментах, которые вы не можете выразить словами.",
        "Не ждите идеального момента.",
        "Берите каждый момент и делайте его идеальным.",
        "Признай это. Без меня, твоя жизнь была бы действительно скучной.",
        "Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь.",
        "Я пыталась заниматься йогой, но в позе лотоса уснула.",
        "Я, возможно, никогда не буду лучшей, но я стараюсь быть лучшей твоей.",
        "Если вам никто не улыбнулся утром, я подарю вам одну из своих.",
        "Никогда не позволяйте никому скучать.",
        "Все только начинает становиться действительно хорошим.",
        "Я опять съела сладкое. А все потому, что каждую секунду в мире 200 человек празднуют свой день рождения!",
        "Мечтайте. Поверьте, в это. Добейтесь этого.",
        "Утром, только одна хорошая мысль меняет смысл целого дня.",
        "Надейтесь на лучшее, но не ждите этого. Смотрите вперед в будущее, но никогда не ждите, пока это произойдет.",
        "Любите меня, от этого я буду сиять еще ярче.",
        "Я точно знаю, кто я, и я чертовски горжусь этим."],
    URLS = ["photos/", "img/avatar-"],
    EXTISIONS = [".jpg", ".svg"],
    IMG_IDS = getRangeNumbers(1, 25),
    USER_IDS = getRangeNumbers(1, 200 * 15);

// входные данные


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

function arrayClone(arr) {
    return arr.map(function (item) {
        return item;
    })
}

function arrayCopy(instance, target) {
    target.length = 0;
    for (let i = 0; i < instance.length; i++) {
        target[i] = instance[i];
    }
    return target;
}

function arrayScatter(arr) {
    arr = arrayClone(arr),
        result = [];
    while (arr.length > 0) {
        result.push(...arr.splice(getRandomNum(0, arr.length)))
    }
    arr = null;
    return result;
}


function detachFromArray(array) {
    if (array.length < 1) {
        array = null;
        return false;
    }
    let index = getRandomNum(0, array.length - 1);
    return array.splice(index, 1)[0];
}

function selectFromArray(array) {
    if (array.length < 1) {
        array = null;
        return false;
    }
    let index = getRandomNum(0, array.length - 1);
    return array[index];
}

function infoCollect() {
    let data = {
        ids: getRangeNumbers(1, 25),
        url: URLS,
        description: DESCRIPTIONS,
        likes: getRangeNumbers(15, 200),
        comments: {
            ids: getRangeNumbers(1, 1000),
            avatars: {
                jpeg: EXTISIONS[0],
                svg: EXTISIONS[1]
            },
            masseges: MESSAGES,
            names: NAMES,
        },
    }
    descriptions = null;
    messages = null;
    names = null;

    return data;
}

function getPhotos(length = 25) {
    try {
        arrayCopy(getRangeNumbers(1, length), IMG_IDS);
        if (typeof length === "object" || Number(length) !== Number(length) || Number(length) === 0) {
            throw new Error("Ошибка ввода данных, должно быть число не меньше 1")
        }
        return Array.from({ length: length }, getPhotoInfo);
    } catch (err) {
        console.log(err)
    }
}

function getPhotoInfo() {
    let temp = detachFromArray(IMG_IDS);

    return {
        id: temp,
        url: URLS[0] + temp + EXTISIONS[0],
        description: selectFromArray(DESCRIPTIONS),
        likes: getRandomNum(15, 200),
        comments: Array.from({ length: getRandomNum(3, 15) }, getComment)
    };
}

function getComment() {
    let temp = detachFromArray(USER_IDS)
    return {
        id: temp,
        avatar: URLS[1] + temp + EXTISIONS[1],
        message: selectFromArray(DESCRIPTIONS),
        name: selectFromArray(NAMES),
    }
}



