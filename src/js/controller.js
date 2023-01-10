const connection = require('./database.js');

const getAllUsers = (req, res) => {
    const query = 'select * from users';
    connection.query(query, (error, result) => {
      if (error) return res.status(500).json(err);
      res.status(200).json(result);
    });
  };

  const getOneUser = (req, res) => {
    const query = `select * from users where user_id=${req.params.id}`;
    connection.query(query, (error, result) => {
      if (error) return res.status(500).json(error);
      if (result.length === 0) return res.status(404).json('No user found');
      res.status(200).json(result[0]);
    });
 };

 const createUser = (req, res) => {

    const { user_id, user_name,user_email,user_psswd, isAdmin } = req.body;
    if (!user_id || !user_name || !user_email || !user_psswd || !isAdmin ) {
      res.status(400).json('Not enough data!');
    };
    const config = {
      user_id: user_id,
      user_name: user_name,
      user_email: user_email,
      user_psswd: user_psswd,
      isAdmin: isAdmin,
    };
    const query = 'insert into users set ?';
    connection.query(query, config, (error, result) => {
      if (error) return res.status(500).json(error);
      res.status(201).json(`New user ${user_name} was created `);
    });
 };

 const updateUser = (req, res) => {
    let query;
    const id = req.params.id;
    const {user_name, user_email, user_psswd } = req.body;
    if (!user_name && !user_email && !user_psswd ) {
      res.status(400).json('Not enough data!');
    };
    if(user_name){
        query = `update users set user_name='${user_name}' where user_id=${id}`;
        connection.query(query, (error) => {
        if (error) return res.status(500).json(error);
    });
    };
    if(user_email){
         query = `update users set user_email='${user_email}' where user_id=${id}`;
        connection.query(query, (error) => {
        if (error) return res.status(500).json(error);
    });
    };
    if(user_psswd){
        query =`update users set user_psswd='${user_psswd}' where user_id=${id}`;
        connection.query(query, (error) => {
        if (error) return res.status(500).json(error);
    });
    };
    res.status(200).json('User was updated');
 };

 const deleteUser = (req, res) => {
    const id = req.params.id;
    const query = `delete from users where user_id=${id}`;
    connection.query(query, (error) => {
      if (error) return res.status(500).json(error);
      res.status(200).json(`User id:(${id}) was deleted `);
    });
  }

  module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
  };