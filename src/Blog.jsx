import React from 'react';
import Article from './Article';
// import { Foo, Bar } from './components/FooBar'; // 名前付きモジュールのインポート
import * as FooBar from './components/FooBar'; // 別名インポート
import Hoge from './components/Hoge'; // 名前なしモジュールのインポート


/**
 * Class Component
 *  - React.Componentを継承
 *  - ライフサイクルやstateを持つ
 *  - propsにはthisが必要
 *  - renderメソッド内でJSXをreturnする
 */
const Blog = () => {
  // componentDidMount() {
  //   // ボタンクリックされたらいいねをカウントアップ
  //   document.getElementById('counter').addEventListener('click', this.countUp);//coutUp()にすると無限ループ
  // }

  // componentDidUpdate() {
  //   console.log(this.state.count);
  //   if (this.state.count >= 10) {
  //     this.setState({ count: 0 });
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp);
  // }

  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // };

  return (
    <>
      <Article
        title={"Reactの使い方"}
        // count={this.state.count}
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
}

export default Blog
