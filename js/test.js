// входные данные
let messages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
],
  names = [
    "Толя", "Андрей", "Маргарита", "Эльмира", "Зульфия", "Юлия", "Анастасия", "Валенитна", "Мария", "Ольга", "Вадим", "Борис", "Павел", "Станислав", "Василий", "Николай", "Дмитрий", "Макс"
  ],
  descriptionsSet = "Смейтесь как только умеете, любите столько, сколько живете.Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.Улыбка — единственный тренд в моде, который актуален всегда.Никогда не ищите свое счастье там, где вы его однажды потеряли.Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.Моя жизнь меняется, потому что меняю ее я.Всегда начинайте свой день с хороших людей и кофе.Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.Жизнь — это всего лишь серия крошечных чудес, поэтому обратите внимание на них.Живите во всех тех моментах, которые вы не можете выразить словами.Не ждите идеального момента. Берите каждый момент и делайте его идеальным.Признай это. Без меня, твоя жизнь была бы действительно скучной.Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь.Я пыталась заниматься йогой, но в позе лотоса уснула.Я, возможно, никогда не буду лучшей, но я стараюсь быть лучшей твоей.Если вам никто не улыбнулся утром, я подарю вам одну из своих.Никогда не позволяйте никому скучать.Все только начинает становиться действительно хорошим.Я опять съела сладкое. А все потому, что каждую секунду в мире 200 человек празднуют свой день рождения!Мечтайте. Поверьте, в это. Добейтесь этого.Утром, только одна хорошая мысль меняет смысл целого дня.Надейтесь на лучшее, но не ждите этого. Смотрите вперед в будущее, но никогда не ждите, пока это произойдет.Любите меня, от этого я буду сиять еще ярче.Я точно знаю, кто я, и я чертовски горжусь этим.";

let descriptions = descriptionsSet.split("."),
  urls = ["photos/", "img/avatar-"],
  extensions = [".jpg", ".svg"]

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


function getPhotoSet(arr) {

  let msg;
  // msg = arr.splice(getRandomNum(arr.length), 1);

  // while (arr.length > 0) {
  //     msg = arr.splice(getRandomNum(arr.length), 1);
  //     console.log(...msg)
  // }
  return {
    id: arrayScatter(getRangeNumbers(1, 25))[0],
    // url: `photos/${arr}.jpg`,
    description: null,
    likes: 0,
    comments: null
  }

}

function arrayCopy(arr) {
  return arr.map(function (item) {
    return item;
  })
}

function arrayScatter(arr) {
  arr = arrayCopy(arr),
    result = [];
  while (arr.length > 0) {
    result.push(...arr.splice(getRandomNum(0, arr.length)))
  }
  arr = null;
  return result;
}

// function сollectdata(idis, names ){
// ...args.reduce(function(accum, item){

// })
// }

// function photoInfo() {
//   this.id = ;
//   this.url = null;
//   this.description = null;
//   this.likes = null;
//   this.comments = null;
//   return this

//   function getCommentInfo() {
//     this.id = null;
//     this.avatar = null;
//     this.message = null;
//     this.name = null;
//     return this;
//   }

// }

function infoCollect() {
  let data = {
    ids: getRangeNumbers(1, 25),
    url: urls,
    description: descriptions,
    likes: getRangeNumbers(15, 200),
    comments: {
      ids: getRangeNumbers(1, 1000),
      avatars: {
        jpeg: extensions[0],
        svg: extensions[1]
      },
      masseges: messages,
      names: names,
    },
  }
  descriptions = null;
  messages = null;
  names = null;

  return data;
}


function PhotoInfo(obj) {
  return {
    id: obj.ids.splice(getRandomNum(obj.ids.length - 1), 1)
  };
}

let info = infoCollect();

