import React from 'react';
import NoteAppBodyFormInput from './NoteAppBodyFormInput';
import NoteAppHeader from './NoteAppHeader'; 
import NotesList from './NotesList';
import { getInitialData, showFormattedDate } from "../utils";

class NoteAppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            date: showFormattedDate(),
            search: '',
        }

        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
}

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id ? {...note, archived : !note.archived} : note)
        this.setState({ notes });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({
            notes
        });
    }
    

    onAddNoteHandler({ title, body
    }) {
        let date = new Date();
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: date.toISOString(),
                    }
                ]
            }
        });
    }

    onNoteSearchHandler(event) {
        this.setState(() => {
          return {
            search : event.target.value
          }
        })
      }



    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const enableNotes = notes.filter((note) => {

            return note.archived === false;
          });
          const archivedNotes = notes.filter((note) => {
            return note.archived === true;
          })

        return ( 
            <>
            <NoteAppHeader 
            search={this.state.search}
            onSearchChange={this.onNoteSearchHandler}/>
            <div className = 'note-app__body'>
            <NoteAppBodyFormInput 
            addNote={this.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <br />
            {enableNotes.length !== 0 ? <NotesList notes={enableNotes} text='Arsipkan' onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <p className='notes-list__empty-message'>Tidak ada catatan</p>}
            <h2>Arsip</h2>
            <br />
            {archivedNotes.length !== 0 ? (
            <NotesList notes={archivedNotes} text='Pindahkan' onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUndo={this.onUndoHandler} />
            ) : (
            <p className='notes-list__empty-message'>Tidak ada catatan</p>
            )}
            </div>
        </>
    );
  }
}


export default NoteAppBody;

