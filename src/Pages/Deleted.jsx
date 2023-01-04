import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import DeletedTasks from '../components/DeletedTasks';
import axios from 'axios';
import { GiReturnArrow } from 'react-icons/gi'
import { Alert } from '@mui/material';
const Deleted = () => {
    const [data2, setData2] = useState(null)
    const url = 'http://localhost:3001/deletedTasks'
    
    useEffect(() => {
        axios.get(url)
         .then(res => setData2(res.data))
    }, []);


    return (
        <div>
                <Helmet>
                     <title>Todocom | Deleted</title>
                </Helmet>
                <div className="deleted-tasks">
                    <h2>Your deleted tasks</h2>
                    <p>If u want to return back your task,just click to this icon <GiReturnArrow /></p>
                    {
                        data2?.length !== 0
                        ?
                        data2?.map((item, index) => <DeletedTasks key={item.id} item={item} />)
                        :
                        <div className="alert-block">
                            <Alert icon={false} severity="success">
                           This field is empty!
                         </Alert>
                        </div>
                    }
                </div>
        </div>
    );
}

export default Deleted;
