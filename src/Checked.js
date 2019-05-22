import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Checked(props) {
    const [checked, setChecked] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/api/checked');
            console.log(response)
            setChecked(response.data);
        }
        getData();
    }, [])

    return(
        <div className='checked-list'>
            <div>
                <Link to='/'>Overview</Link>{' '}
                <Link to='/unchecked'>Unchecked</Link>
            </div>
            <h1>Checked Items</h1>
            {checked.map(val => {
                return <span>{val.todo}</span>
            })}
        </div>
    )
}

export default Checked;