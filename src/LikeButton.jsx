import React, { useState, useEffect } from 'react';

const LikeButton = (props) => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1)
  }

  useEffect(() => {
    console.log('render') //クリックのたびに
    document.getElementById('counter').addEventListener('click', countUp)
    if (count >= 10)
      counter(0)
    return () => {
      console.log('UnMounting') //クリックのたびに
      document.getElementById('counter').removeEventListener('click', countUp)
    }
  },[limit])  //第二引数に空の配列を渡すと一回しか増えない, limitが変わったときに実行

  return (
    <>
      <button id={"counter"}>いいね数: {count}</button>
      <button onClick={() => release(!limit)}>もっといいねしたい!</button>
    </>
  )
}

export default LikeButton
