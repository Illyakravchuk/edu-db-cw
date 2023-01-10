const express = require('express');
const app = express();
const connection = require('./database.js');
const PORT = 4500;
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser} = require('./controller.js');
app.use(express.json());

app.get('/users', getAllUsers);

app.get('/user/:id', getOneUser);

app.post('/users', createUser);

app.put('/user/:id', updateUser);

app.delete('/user/:id', deleteUser);





















connection.connect(app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}));

