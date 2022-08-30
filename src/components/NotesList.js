import React from 'react'
import NoteItemContent from './NoteItemContent';

function NotesList({notes, onDelete, onArchive}) {
    return ( 
    <div className = "notes-list" >
        {
        notes.map((note) => (
            <NoteItemContent 
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note} />
        ))
    }        
        </div>

    );
}

export default NotesList;