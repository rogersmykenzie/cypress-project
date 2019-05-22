const express = require('express');

const app = express();

app.use(express.json());

let items = [
    {
        todo: "Get Eggs",
        id: 1,
        checked: false
    },
    {
        todo: "Get Milk",
        id: 2,
        checked: false
    },
    {
        todo: "Get Butter",
        id: 3,
        checked: false
    },
    {
        todo: "Learn Cypress",
        id: 4,
        checked: false
    }
]

// app.get('/api/reset', (req, res) => {
//     items = itemsBackup.slice();
//     console.log(items);
//     res.status(200).json(items);
// })

app.get('/api/items', (req, res) => {
    res.status(200).json(items);
})

app.get('/api/checked', (req, res) => {
    res.status(200).json(items.filter(val => val.checked));
})

app.get('/api/unchecked', (req, res) => {
    res.status(200).json(items.filter(val => !val.checked));
})

app.put('/api/toggle/:id', (req, res) => {
    let index = items.findIndex(val => val.id == req.params.id);
    items[index].checked = !items[index].checked;
    res.status(200).json(items);
})

app.delete('/api/delete/:id', (req, res) => {
    let index = items.findIndex(val => val.id == req.params.id);
    items.splice(index, 1);
    res.status(200).json(items);
})

app.post('/api/add', (req, res) => {
    let id = 0;
    for(let i = 0; i < items.length; i++) {
        if(items[i].id > id)
            id = items[i].id;
    }
    id++;
    items.push({
        todo: req.body.todo,
        id,
        checked: false
    })
    res.status(200).json(items);
})

app.listen(5050, () => console.log('Listening on Port 5050'));