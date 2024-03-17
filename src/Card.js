import { useState } from 'react'

function Card({ word, handlePanelClick }) {
  const [reveal, setReveal] = useState(false)

  const { german, english } = word;

  const revealClass = reveal ? "" : "not-revealed";

  return (
    <div className={`card__wrapper ${revealClass}`}>

      <div className="card__side side--left" onClick={() => handlePanelClick('left')}>
        <i class="fas fa-chevron-left"></i>
      </div>

      <div className="card" onClick={() => (reveal ? null : setReveal(true))}>
        <div className="card__grid">
          <div className="card__face german">{german}</div>
          <div className="card__face english" style={{ opacity: ` ${reveal ? '1' : '0'}` }}>{english}</div>
        </div>
      </div>

      <div className="card__side side--right" onClick={() => handlePanelClick('right')}>
        <i class="fas fa-chevron-right"></i>
      </div>

    </div>
  )
}

export default Card;