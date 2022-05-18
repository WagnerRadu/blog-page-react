import React from 'react'

type Props = {
  openModal: () => void,
}

export default function AddBtn({openModal}: Props) {
  return (
    <div className="button-container">
            <button className="button" id="addButton" onClick={openModal}>+ ADD ARTICLE</button>
        </div>
  )
}