import React from 'react';

/**
 * Functional Component
 *  - ES6のアロー関数で記述
 *  - stateを持たない
 *  - propsを引数に受け取る
 *  - JSXをreturnする
 */
const Article = (props) => {
  const publishState = props.isPublished ? "公開" : "非公開"
  return (
    <div>
      <p>{ publishState}</p>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です。</p>
      <p>著者:{ props.authorName }</p>
    </div>
  )
}

export default Article
