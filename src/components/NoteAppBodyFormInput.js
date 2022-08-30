import React from 'react'

export class NoteAppBodyFormInput extends React.Component {
constructor(props) {
super(props);
this.state = {
title: '',
body: '',
date: '',


}

this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this);
}

onTitleChangeEventHandler(event) {
const maxChar = 50;
this.setState((prevState) => {
return {
...prevState,

title: event.target.value.slice(0, maxChar)
};
});
}


onBodyChangeEventHandler(event) {
this.setState(() => {
return {
body: event.target.value,
}
});
}

onDateChangeEventHandler(event) {
this.setState((prevState) => {
return {
...prevState,
date: event.target.value,
};
});
}

onSubmitEventHandler(event) {
event.preventDefault();
this.props.addNote(this.state);
}



render() {
const charLimit = 50;
return ( < div className='note-input'>

    <h2 className="note-input__title"> Catatan </h2> 
    <p className="note-input__title__char-limit"> Sisa Karakter: {charLimit - this.state.title.length} </p> 
    
    < form className="note-input__body" onSubmit={ this.onSubmitEventHandler }>

                < input type="text" placeholder="Ini adalah judul.." value={ this.state.title } onChange={
                    this.onTitleChangeEventHandler } />

                < textarea cols="30" rows="10" placeholder="Tuliskan catatan di sini.." value={ this.state.body }
                    onChange={ this.onBodyChangeEventHandler } />

                <button type='submit'> Buat </button> 
                </form> 
                </div> 
                ) 
                } 
                } 
                
            
export default NoteAppBodyFormInput;