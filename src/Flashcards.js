import { useState } from 'react';
import Card from './Card';
import { data } from './data';


function Flashcards() {
  const [wordCount, setWordCount] = useState(0)

  let { words } = data;
  let totalWords = words.length;

  function handlePanelClick(side) {

    if (side === 'left') {
      let newCount = wordCount - 1;
      if (newCount <= 0) return setWordCount(totalWords - 1);
      return setWordCount(newCount);
    }

    if (side === 'right') {
      let newCount = wordCount + 1;
      if (newCount >= totalWords) return setWordCount(0);
      return setWordCount(newCount);
    }
  }

  return (
    <div className="flashcards__wrapper">
      <div className="flashcards">
        <Card word={words[wordCount]} key={words[wordCount].id} handlePanelClick={handlePanelClick} />
        <div className="word--counter__wrapper">
          {words.map((_, i) => {
            return <span className={`word--counter ${(wordCount === i) ? 'active' : ''}`} key={i} onClick={() => setWordCount(i)}></span>
          })}
        </div>
      </div>
    </div>
  )
}

export default Flashcards



  // 1. Maintain MouseDown location and scroll info onmousedown of window
  // 2. Add mousemove listener on mousedown of scroller
  // 3. Calculate scrollLeft and scrollTop according to window clientX and clientY in mousemove
  // 4. Remove mousemove on window's onmouseup listener.



  // function handleClick() {

  //   let newCount = wordCount + 1;

  //   if (newCount >= totalWords) {
  //     return setWordCount(0)
  //   }
  //   setWordCount(newCount);
  // }