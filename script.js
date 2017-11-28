// boxのDOMを取得
var box = document.getElementById('box');
// btnのDOMを取得
var btn = document.getElementById('btn');

function changeBackgroundColor(){
  box.classList.toggle('red');
}

btn.addEventListener('click', changeBackgroundColor);

//(例) btn.addEventListener('click', function(){
  // console.log('クリックしたらボックスの色が変わるよ');
// });
