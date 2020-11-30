import React, { useState } from 'react';
import LikeButton from './LikeButton';

/**
 * Functional Component
 *  - ES6のアロー関数で記述
 *  - stateを持たない
 *  - propsを引数に受け取る
 *  - JSXをreturnする
 */
const Article = (props) => {
  const [isPublished, togglePublished] = useState(false);

  return (
    <div>
      <h2>{props.title}</h2>
      <label for="check">公開状態:</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)} />
      <LikeButton />
    </div>
  )
}

export default Article
