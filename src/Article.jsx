import React from 'react';

/**
 * Functional Component
 *  - ES6のアロー関数で記述
 *  - stateを持たない
 *  - propsを引数に受け取る
 *  - JSXをreturnする
 */
const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label for="check">公開状態:</label>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={ () => props.toggle() }></input>
    </div>
  )
}

export default Article
