import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
const ModalEdit = ({setOpen, item}) => {
    const url = 'http://localhost:3001/data' 
    const [value, setValue] = useState('')
    function editData(e) {
        e.preventDefault()
        axios.patch(url + '/' + item.id, {
            taskTitle: value
        })
        setOpen(false)
    }
    return (
        <div className='modal-edit-wrap'>
            <form onSubmit={e => editData(e)}>
            <div className="modal-edit">
            <TextField 
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="standard"
                        name='taskTitle2'
                        fullWidth
                        onInput={e => setValue(e.target.value)}
                    />  
                    <div className="modal-btns">
                       <Button variant='contained' sx={{width: '35%'}} type='submit'>Add</Button>
                       <Button variant='outlined' sx={{width: '25%'}} onClick={()=>setOpen(false)}>Cancel</Button>
                    </div>
            </div>
            </form>
        </div>
    );
}

export default ModalEdit;
