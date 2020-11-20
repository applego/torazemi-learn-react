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
  }
  render() {
    return (
      <div>
        <Article />
      </div>
    )
  }
}

export default Blog
