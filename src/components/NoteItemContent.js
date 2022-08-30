import React from 'react'
import NoteItemBody from './NoteItemBody'
import NoteItemDate from './NoteItemDate'
import NoteItemTitle from './NoteItemTitle'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'


function NoteItemContent({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive
}) {
  return ( 
        <div className = "note-item" >
            <div className = "note-item__content" >
              <NoteItemTitle title={title} />
              <NoteItemDate date={createdAt} />
              <NoteItemBody  body={body}  />
            </div>
            <div className="note-item__action">
              <DeleteButton id={id} onDelete={onDelete} />
              <ArchiveButton id={id} onArchive={onArchive} />
            </div>
        </div>  
  )
}

export default NoteItemContent;