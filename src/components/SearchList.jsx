import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Context';

const SearchList = ({ value }) => {
    const [data2, setData2] = useState([])
    const url = 'http://localhost:3001/data'
    useEffect(() => {
      axios.get(url)
        .then(res => setData2(res.data))   
    }, [data2]);
        const filtered = data2?.filter(i => {
            if(i.taskTitle.toLowerCase().includes(value.toLowerCase())){
                return i.taskTitle
            }
        })
        const { setValue2 } = useContext(AuthContext)
        const clickHandler = (e) => {
            setValue2(e.target.textContent)
        }
    return (
        <div className='search-list'>
            <p>Search results</p>
            <ul className='autocomplete'>
            {
                value ? filtered.map(item => <li onClick={(e) => clickHandler(e)} key={item.id}>{item.taskTitle}</li>) : null
            }
            </ul>
        </div>
    );
}

export default SearchList;
