import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GiReturnArrow } from 'react-icons/gi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import ModalDelete2 from './ModalDelete2';
const DeletedTasks = ({item}) => {
    const url = 'http://localhost:3001/data'
    const url2 = 'http://localhost:3001/deletedTasks'
    const [openModal, setOpenModal] = useState(false);
    const returnBack = () => {
        axios.post(url, item)
        axios.delete(url2 + '/' + item.id)
    }
    const handleClickOpen = () => {
        setOpenModal(true);
      };
      const handleClose = () => {
        setOpenModal(false);
      };
      const deleted = () => {
        axios.delete(url2 + '/' + item.id)
      }
    return (
        <div>
                <div className='todo-item deleted-item'>
            <div className="left-todo-item">
                <div className="text-date">
                    <p>{item.taskTitle}</p>
                </div>
            </div>
            <div className="right-todo-item right-todo-item-del">
                <RiDeleteBin5Fill size={'20px'} onClick={handleClickOpen} />
                <GiReturnArrow size={'20px'} onClick={returnBack} />
            </div>
        </div> 
        <div className="modal-delete">
            <ModalDelete2 handleClose={handleClose} openModal={openModal} deleted={deleted} />
            </div>
        </div>
    );
}

export default DeletedTasks;
