import React from 'react'
import NoteAppHeaderSearch from './NoteAppHeaderSearch'
import NoteAppHeaderTitle from './NoteAppHeaderTitle';


function NoteAppHeader({
search,
onSearchChange
}) {
return ( 
<div className='note-app__header'>
  < NoteAppHeaderTitle />
    < NoteAppHeaderSearch search={ search } onSearchChange={ onSearchChange } />
    </div> ) } 
    
export default NoteAppHeader;