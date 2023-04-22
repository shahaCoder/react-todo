import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { TbCirclePlus } from 'react-icons/tb'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { Alert, Button, IconButton, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Childs from '../Layouts/Childs';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../Context/Context';
const HomePage = () => {
    const date = moment().format("MMM Do YY");
    const [show, setShow] = useState(false)
    const [post, setPost] = useState(null)
    const [value, setValue] = useState('')
    const [alert, setAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const url = 'http://localhost:3001/data'
    const addTask = (e) => {
       e.preventDefault()

       let obj2 = {
        id: uuidv4()
       }

       let fd = new FormData(e.target) 

       fd.forEach((value, key) => {
         obj2[key] = value
       })
       
       if(!value){
        setAlert(true)
       } else {
        setAlert(false)
        setSuccess(true)
        axios.post(url, obj2)
       }
       setValue('')
    }
    const { value2 } = useContext(AuthContext)
    const filtered = post?.filter(i => {
      if(i.taskTitle.toLowerCase().includes(value2.toLowerCase())){
          return i.taskTitle
      } else {
        return null
      }
  })
    useEffect(() => {
        axios.get(url)
         .then(res => {
            setPost(res.data)
         })
    }, []);
    
    return (
        <div>
                    <Helmet>
                         <title>Todocom | Create notes</title>
                     </Helmet>
            <div className="create-todo">
                {
                    alert
                    ?
                    <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        severity="error"
                        onClick={() => {
                          setAlert(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                    severity="error"
                  >
                    You can not add empty tasks!
                  </Alert>
                    :
                    null
                }
                {
                    success
                    ?
                    <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          You successfully added your note.
        </Alert>
        :
        null
                }
                <div className="title">
                    <h1>Today <span>{date}</span></h1>
                </div>
                <div className="todo-block">
                <div className="left-todo-side">
                <div className="add-task">
                    {
                        show ? <AiOutlineMinusCircle size={'25px'} onClick={() => setShow(!show)} /> : <TbCirclePlus size={'25px'} onClick={() => setShow(!show)} /> 
                    }
                    {
                        show ? <p onClick={() => setShow(!show)}>Cancel</p>  : <p onClick={() => setShow(!show)}>Add task</p> 
                    }
                </div>
                <form onSubmit={(e) => addTask(e)} >
                <div className="inp-field">
                {
                        show 
                        ?
                         <TextField 
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        variant="standard"
                        name='taskTitle'
                        fullWidth
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />  
                    :
                    null 
                }
                </div>
                {
                    show 
                    ?
                    <div className="add-task_btn">
                    <Button variant='contained' sx={{width: '15%'}} type='submit'>Add</Button>
                    <Button variant='outlined' onClick={() => setShow(false)}>Cancel</Button>
                </div>
                :
                null
                }
                </form>
                </div>
                <hr />
                <div className="right-todo-side">
                    {
                        filtered?.map(i =>  <Childs key={i.id} i={i}></Childs>)
                    }
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default HomePage;
