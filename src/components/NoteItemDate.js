import React from 'react'
import { showFormattedDate } from "../utils";

function NoteItemDate({date}) {
  return (
    <p className="note-item__date">{showFormattedDate(date)}</p>
  )
}

export default NoteItemDate