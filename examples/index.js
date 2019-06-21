import { hoge as h } from "./module"; // review: test

/**
 * NOTE: @konojunya hogehogeする
 * まじでそう
 */
const hoge = () => {
  console.log("hoge");
};

/**
 * FIXME: @konojunya 修正する
 */
hoge();

// HACK: @konojunya litle hack
console.log(h());
