import React, { useState } from 'react';
import moment from 'moment';
import { MdDeleteOutline } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import axios from 'axios';
import ModalEdit from '../components/ModalEdit';
import ModalDelete from '../components/ModalDelete';
const Childs = ({i}) => {
    const date = moment().format("MMM Do YY");
    const url = 'http://localhost:3001/data'
    const url2 = 'http://localhost:3001/deletedTasks'
    const [open, setOpen] = useState(false) 
    const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
    const deleted = () => {
        axios.delete(url + '/' + i.id)
            axios.post(url2, i)
        setOpenModal(false)
    }
    return (
        <div className='todo-item'>
            <div className="left-todo-item">
            <input type="checkbox" className='checkbox' />
                <div className="text-date">
                    <p>{i.taskTitle}</p>
                    <span>{date}</span>
                </div>
            </div>
            <div className="right-todo-item">
                <BiEditAlt size={'25px'} onClick={() => setOpen(true)} />
            <MdDeleteOutline size={'25px'} onClick={handleClickOpen} />
            </div>
            {
                open ? <ModalEdit setOpen={setOpen} item={i} /> : null
            }
            <div className="modal-delete">
            <ModalDelete handleClose={handleClose} openModal={openModal} deleted={deleted} />
            </div>
        </div>
    );
}

export default Childs;
