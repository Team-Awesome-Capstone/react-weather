import React from "react"; 
import ShowAllToo from './ShowAllToo'
import ShowAll from './showAll'

class NewApp extends  {
    render() {
        return (
            <>
            <div>This is the parent</div>
            <ShowAll />
            <ShowAllToo />
            </>
        );
    }
}

export default NewApp;