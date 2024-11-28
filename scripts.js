
// 手順 1: 漢字のデータを作成
const kanji = [
    {
      meaning: "Dream",
      kunyomi: "ゆめ、くらい",
      onyomi: "ム、ボウ",
      img: "https://th.bing.com/th/id/R.a780b70dd14884db1ed68c840eef233b?rik=sTvl0oENwhp3iQ&riu=http%3a%2f%2fikanji.jp%2fuser_data%2fimages%2fupload%2fcharacter%2foriginal%2fE5A4A2.png&ehk=e3MMA0e%2fve3tSMYv0HDPT1hFSAjD%2bt2fMcV40I5z%2bYs%3d&risl=&pid=ImgRaw&r=0",
      example: "夢中、悪夢、夢にも、夢想",
    },
    {
      meaning: "Life",
      kunyomi: "い、なま、う、は、き",
      onyomi: "せい、しょう",
      img: "https://th.bing.com/th/id/OIP.VHw5CThX07cM_EvxOkYxmwHaJ4?rs=1&pid=ImgDetMain",
      example: "学生、生まれる",
    },
    {
      meaning: "Alert",
      kunyomi: "さとい",
      onyomi: "ビン",
      img: "https://th.bing.com/th/id/R.bb363678f5b48fcf0f92f9100fcb380f?rik=1XVTfPnaAfJkQg&riu=http%3a%2f%2fikanji.jp%2fuser_data%2fimages%2fupload%2fcharacter%2foriginal%2fE6958F.png&ehk=jOadEwFq4HoA3Ibr%2bGZWV182KjRE9rE97QUu4V%2fwqR8%3d&risl=&pid=ImgRaw&r=0",
      example: "敏感、過敏、機敏、敏速",
    },
    
    {
      meaning: "Abundant, rich",
      kunyomi: " ",
      onyomi: "ゆう",
      img: "https://th.bing.com/th/id/OIP.cuRAPeMQCX6q94SCKWGXbgAAAA?rs=1&pid=ImgDetMain",
      example: "余裕、裕福、富裕",
    },
    {
      meaning: "Just so, Absolutely",
      kunyomi: "これ、この、ここ",
      onyomi: "ぜ、シ",
      img: "https://kanji.jitenon.jp/shotai2/1159.gif",
      example: "是非とも、是正、是認",
    },
    
  ];



// 手順 2： DOM要素を取
let meaning =document.getElementById("meaning");
let onyomi =document.getElementById("onyomi");
let kunyomi =document.getElementById("kunyomi");
let imagen =document.getElementById("img");
let example =document.getElementById("example");

let rightButton =document.getElementById("button-right");
let leftButton =document.getElementById("button-left");


// 手順 3： 現在のインデックス
let index=0;

console.log(kanji[0]["img"]);

// 手順 4：レビューを表示する関数
function showInformation(index) {   
    let item = kanji[index];
    onyomi.innerHTML=item.onyomi;
    kunyomi.innerHTML=item.kunyomi;
    imagen.src=item.img;
    
    meaning .innerHTML=item.meaning;
    example.innerHTML=item.example;
    
};

/* NOTE: ページが読み込まれたとき (DOMContentLoaded イベント)、最初のレビューを表示します。
 ページが完全にロードされる前にスクリプトを実行したい場合に便利です。
 画像や CSS の読み込みを待つ必要がないので、より速く実行できます */

document.addEventListener("DOMContentLoaded", function(){
    console.log('HTML が読み込まれました！'); //デバッグのために
    showInformation(index);
});


// 手順　５：「次へ」ボタンをクリックしたときの動作
function goRight(){
    index +=1;
       
    if (index>kanji.length-1) {
        console.log('現在のインデックスが JSON 形式の長さを超えています');   
        index =0;
        showInformation(index);

    }else{
        showInformation(index);
    }
    console.log(index); 
};
 
// 手順　6：「前へ」ボタンをクリックしたときの動作
function goLeft(){
     
    index -=1;
    console.log(index);     
    if (index<0) {
        index =kanji.length-1;
        showInformation(index);
        
    }else{
        console.log('go left');   
        showInformation(index);
    }
};

function randomKanji(){
    index=Math.floor(Math.random() * kanji.length);
    console.log(index);
    showInformation(index);
}