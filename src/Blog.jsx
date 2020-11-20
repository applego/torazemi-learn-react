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
    const authorName = "Torahack"
    return (
      <>
        <Article
          title={"Reactの使い方"}
          order={3}
          isPublished={true}
          authorName={authorName}
        />
      </>
    )
  }
}

export default Blog
