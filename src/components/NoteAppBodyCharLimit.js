import React from 'react'

function NoteAppBodyCharLimit({ maxText }) {
  return (
    <div className="note-input__title__char-limit">
        <p>Sisa Karakter: {maxText}</p>
    </div>
  )
}

export default NoteAppBodyCharLimit