let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2019/08/MG_9183-800x600-1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2020/08/紅葉見ナイト（カエデ園ライトアップ）-800x600.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/10/53-01-1皆野町_天空のポピー.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/03/10_1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/03/45-1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/03/28_1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2019/08/sp64.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2019/08/spt_d_seiten1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2019/09/最優秀%E3%80%80鑑賞独り占め.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/03/11_1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/03/27-1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2019/11/本殿-3-e1574817972693-800x600.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2021/03/52-1.jpg",
"https://chocotabi-saitama.jp/cms/wp-content/uploads/2019/08/さわらびの湯_0300-800x600.jpg",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
