import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StringLiteralLike } from 'typescript';

const name = 'hello'; //リテラル型

let username: string = 'Hello'; //文字列型
let dummyNum: number = 2; //数値型
let dool: boolean = true; //ブーリアン型
// 上記のように明示的にデータ型を指定することをアノーテーションという。

let array1 = [true, false, true];
let array2 = [0, 1, 'hello']

// オブジェクトの型の定義の方法
interface NAME {
  first: string;
  last: string;
}
// memo: 「last?: stringというように記載することでlastの要素がなくても大丈夫になる。
// memo: 「last: string | null」でnullでも受け取れるようになる。

let nameObj: NAME = {first: 'Yamada', last: 'Taro'};

const func1 = (x: number, y:number): number => {
  return x + y;
}

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
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy',
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
