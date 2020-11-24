import React from 'react';
import Article from './Article';

/**
 * Class Component
 *  - React.Componentを継承
 *  - ライフサイクルやstateを持つ
 *  - propsにはthisが必要
 *  - renderメソッド内でJSXをreturnする
 */
class Blog extends React.Component {
  constructor(props) {
    super(props);/**おまじないだと思え*/
    this.state = {
      isPublished: false,
      order:1
    }
  }

  /** 公開状態を反映させる関数 */
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    });
  };

  render() {
    return (
      <>
        <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished() }/>
      </>
    )
  }
}

export default Blog
