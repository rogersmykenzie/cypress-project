import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Unchecked(props) {

    const [unchecked, setUnchecked] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/api/unchecked');
            setUnchecked(response.data);
        }
        getData();
    }, [])

    return (
        <div className='checked-list'>
            <div>
                <Link to='/checked'>Checked</Link>{" "}
                <Link to='/'>Overview</Link>
            </div>
            {unchecked.map(val => {
                return <span>{val.todo}</span>
            })}
        </div>
    )
}

export default Unchecked;