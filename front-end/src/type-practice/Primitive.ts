/*eslint-disable @typescript-eslint/no-unused-vars*/
export {};

//boolean型
let bool: boolean = true;

//nunber型
let number: number = 0;

//string型
let string: string = "string";

//Array型
//型推論便利
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["A", "B", "C"];
//配列の中の方が混合している場合
let arr3: (string | number | boolean)[] = [0, "A", true];
//二次元配列
let arr4: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
];

//tuple型
//tuple型は型推論では表示されない
//arr3は順番までは定義できないがtuple型では順番も定義できる
let arr5: [string, number, boolean] = ["A", 0, true];

//any型
//どんな型を入れてもエラーにならないので極力any型を使わないように開発を進めていく
let arr6: any;

//void型
//返す値が存在しないときに記述する型
const returnNothing = (): void => {};

//never型
// もしneverが書かれていない場合、TypeScriptの型推論ではvoid型になる。
// 理由はnever自体が新しい型でバージョンから登場してまだ追いついていない。
const error = (message: string): never => {
  throw new Error(message);
};
console.log(error("This is an error"));

//null型、undefind型
let Null: null = null;
let Undefinded: undefined = undefined;

//オブジェクト型
let obj: {
  name: string;
} = {
  name: "Yusuke",
};

//型エイリアス(Type Aliases)
//typeの先頭は大文字
type Profile = {
  name: string;
  age: number;
  email: string;
};
const myProfile: Profile = {
  name: "Yusuke",
  age: 20,
  email: "test.com",
};
//１度型を作ってしまえばtypeofで使いまわせる
type Profile2 = typeof myProfile;

//unknown型
//下記のままだと変数numberUnknownの型がわからないから足し算できないかもしれないと判断される
let numberUnknown: unknown = 0;
// let sumUnknown = numberUnknown + 10;←エラーになる
//typeofを使って特定の型であることを確認しながらコードを実行させることを"タイプガード"という
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}

//交差型(intersection型)
type Name = {
  firstName: string;
  lastName: string;
};
type Age = {
  age: number;
};
const myprofile: Name & Age = {
  firstName: "優介",
  lastName: "飯嶋",
  age: 20,
};

// /共用体型(union型)
let value: number | string = 0;
value = "hoge";

//Literal型
//string型
let holiday: "土" | "日" = "日";
// holiday = "月";←エラー

//number型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
// month = 13;←エラー

//boolean型
let TRUE: true = true;
// TRUE = false;←エラー

//列挙型(enum型)
//number型
//最初の要素は0から始まるが最初の要素に任意の値を代入することで変更できる
enum Months {
  January = 1, //1
  February, //2
  March, //3
  April, //4
  May, //5
  June, //6
  July, //7
  August, //8
  September, //9
  October, //10
  November, //11
  December, //12
}
console.log(Months.January); //1
//string型
enum Ages {
  Me = "20歳",
  Brother = "15歳",
  Mom = "45歳",
  Daddy = "50歳",
}
console.log(Ages.Brother); //15歳
