import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StringLiteralLike } from "typescript";

const name = "hello"; //リテラル型

let username: string = "Hello"; //文字列型
let dummyNum: number = 2; //数値型
let dool: boolean = true; //ブーリアン型
// 上記のように明示的にデータ型を指定することをアノーテーションという。

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

// オブジェクトの型の定義の方法
interface NAME {
  first: string;
  last: string;
}
// memo: 「last?: stringというように記載することでlastの要素がなくても大丈夫になる。
// memo: 「last: string | null」でnullでも受け取れるようになる。

let nameObj: NAME = { first: "Yamada", last: "Taro" };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types ...２つのtypeを結合するもの。
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types ...変数が受取れるデータ型を制限する。
let value: boolean | number;
value = true;
value = 10;

// 配列が受け取るデータも制限可能。
let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

// Literal Types ...UnionとLiteralを組み合わせた制限。
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512;
memory = 512;

// typeof ...宣言済み変数の型を取得するもの。(型の継承)
let msg: string = "Hi";
let msg2: typeof msg; //msgと同じ型を継承する。
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof ...オブジェクトのキーをunion types受け取る。
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum ...オブジェクトの中身に自動的に連番を振ってくれる。
// マニュアルで割り振るよりもソフトウェアのバグなども発生しにくく、メンテナンスも容易になる。
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
