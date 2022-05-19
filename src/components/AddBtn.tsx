import React from 'react'

type Props = {
  triggeredFunction?: () => void,
  textContent: string
}

export default function AddBtn({ triggeredFunction, textContent }: Props) {
  return (
    <div className="button-container">
      <button className="button" id="addButton" onClick={triggeredFunction}>{textContent}</button>
    </div>
  )
}