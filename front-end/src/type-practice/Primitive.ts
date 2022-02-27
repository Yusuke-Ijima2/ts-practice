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
