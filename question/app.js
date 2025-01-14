//Q1

let nickname = "ごっしー";
let age = 28
let introduction ="私のニックネームは"+ nickname +"です。"+ "年齢は"+ age +"歳です。"

console.log(introduction);
//したのでもできると思います。
console.log("私のニックネームは" + nickname + "です。年齢は" + age + "歳です。");

//Q2

let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log("私の好きな言語は"+languages[0]+"です。次は"+languages[3]+"を勉強してみたいです。");

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5
let totalAge = 0 
for(let i = 0; i <playerList.length; i++) {
  totalAge +=playerList[i].age;
}
/* 初期値は0の「i」という変数を作っておいて、それがplayerListのオブジェクト数（今回は３人だから「３」）より小さいなら
totalAgeにplayerListのageを足すという命令を出した後、変数 i　に「1」を足すという命令を繰り返す。
この際にplayerList[i].ageと書くことで変数「i」に「1」が追加されるたびにplayerListのオブジェクトを指定できるので
playerListないに入っている全ての人のageをtotalAgeに貯めることができる。
そして全ての人の年齢が入ったtotalAgeをplayerList.length（今回はオブジェクト数（人数））で割ることによって平均が出る
と思います！合っててください本当に*/

const averageAge = totalAge / playerList.length;

console.log(`${averageAge}`);
console.log(`平均年齢は${averageAge}歳です。`);

//もっと単純にできるとのことでしたので組んでみました！
console.log((playerList[0].age + playerList[1].age + playerList[2].age)/ playerList.length );
// もしかしてこれが最適解ですか…？

// Q6
function sayHello() {
  console.log("Hello");
}
sayHello()

let sayWorld = function() { 
  console.log("World");
}
sayWorld();


// Q7

user.birthday = '2000-09-27'

user.sayHello = console.log("Hello！");

// Q8

let calc = {};

 calc.add = function(X,Y){
  console.log(X + Y);
 };
 calc.add(5,2)



calc.subtract = function(X,Y){
  console.log(X - Y);
};
calc.subtract(30,20)



calc.multiply = function(X,Y){
  console.log(X * Y);
};
calc.multiply(7,7)



calc.divide = function(X,Y){
  console.log(X / Y);
};
calc.divide(15,3)

// Q9
function remainder(x, y) {
  return x % y;
}
console.log(`5 を 3 で割った余りは ${remainder(5, 3)} です。`);

// Q10
function foo() {
  let x = 1;
}
// console.log(x);

/* 変数xは関数fooの中でのみ参照できる、ローカル変数のためスコープはfooの中のみ。
console.log(x);で表示させたいなら、変数xをfooの外で定義してfooの中で変数xを代入する必要がある*/ 


// ここからは応用編

// Q1
let random = Math.floor(Math.random()*10);
console.log (random);

// Q2
function helloWorld() {
  console.log("Hello World!");
}

setTimeout(helloWorld, 3000); 

setTimeout(()=>console.log("Hello World!"), 3000); 

// Q3

let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i =0; i<mixed.length; i++){
//ここから下全部繰り返す処理
  let element = mixed[i];

if (typeof element === 'number'){
  if (element % 2===0){
    console.log("even")
  }
  else {
    console.log("odd")
  }
}
  else {
    console.log("not number");  
  }
}
/*ここまで終わったら上のi++をして次の要素へ移る*/