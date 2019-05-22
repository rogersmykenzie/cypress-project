import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function List() {
  const [items, setItems] = useState([]);
  const [inputText, changeInputText] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/api/items');
      setItems(response.data);
    }
    getData();
  }, [])

  async function toggle(id) {
    let response = await axios.put(`/api/toggle/${id}`)
    setItems(response.data);
  }

  async function deleteItem(id) {
    let response = await axios.delete(`/api/delete/${id}`);
    setItems(response.data);
  }

  async function addItem() {
    let response = await axios.post('/api/add', {todo: inputText});
    setItems(response.data);
    changeInputText('');
  }

  return (
    <div className="App">
      <Link to='/checked'>Checked</Link>{" "}
      <Link to='/unchecked'>Unchecked</Link>
      <br />
      <input 
      className='new-item'
      onChange={(e) => changeInputText(e.target.value)}
      value={inputText}
      />
      <button
      className='add-button'
      onClick={addItem}
      >Add Item</button>
      <div className='list'>
        {items.map(val => {
          return <div className='list-item'>
          <span
          className={val.checked ? `checked ${val.todo.split(' ').map(val => val.toLowerCase()).join('-')}` : null}
          >{val.todo}</span>
          <button
          name={val.todo.split(' ').map(val => val.toLowerCase()).join('-') + '-check'}
          onClick={() => toggle(val.id)}
          >Check</button>
          <button
          name={val.todo.split(' ').map(val => val.toLowerCase()).join('-') + '-delete'}
          onClick={() => deleteItem(val.id)}
          >Delete</button>
  </div>
        })}
      </div>
    </div>
  );
}

export default List;
