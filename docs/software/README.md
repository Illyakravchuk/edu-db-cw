# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
## SQL-скрипт для створення на початкового наповнення бази даних:

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `user_id` INT NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(45) NOT NULL,
  `user_psswd` VARCHAR(45) NOT NULL,
  `isAdmin` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `user_email_UNIQUE` (`user_email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`markdown_NER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`markdown_NER` (
  `markdown_id` INT NOT NULL,
  `partials_ready` VARCHAR(45) NULL,
  `partials_not_ready` VARCHAR(45) NULL,
  `markdown_status` INT NULL,
  PRIMARY KEY (`markdown_id`),
  UNIQUE INDEX `markdown_id_UNIQUE` (`markdown_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`markdown_SEMANTIC`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`markdown_SEMANTIC` (
  `markdown_id` INT NOT NULL,
  `partials_ready` VARCHAR(45) NULL,
  `partials_not_ready` VARCHAR(45) NULL,
  `markdown_status` INT NULL,
  PRIMARY KEY (`markdown_id`),
  UNIQUE INDEX `markdown_id_UNIQUE` (`markdown_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`markdown_INTENTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`markdown_INTENTION` (
  `markdown_id` INT NOT NULL,
  `partials_ready` VARCHAR(45) NULL,
  `partials_not_ready` VARCHAR(45) NULL,
  `markdown_status` INT NULL,
  PRIMARY KEY (`markdown_id`),
  UNIQUE INDEX `markdown_id_UNIQUE` (`markdown_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`branch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`branch` (
  `branch_id` INT NOT NULL,
  `editor_id` INT NULL,
  `NER` INT NOT NULL,
  `SEMANTIC` INT NOT NULL,
  `INTENTION` INT NOT NULL,
  PRIMARY KEY (`branch_id`),
  INDEX `editor_idx` (`editor_id` ASC) VISIBLE,
  INDEX `NER_idx` (`NER` ASC) VISIBLE,
  INDEX `SEMANTIC_idx` (`SEMANTIC` ASC) VISIBLE,
  INDEX `INTENTION_idx` (`INTENTION` ASC) VISIBLE,
  CONSTRAINT `editor`
    FOREIGN KEY (`editor_id`)
    REFERENCES `mydb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `NER`
    FOREIGN KEY (`NER`)
    REFERENCES `mydb`.`markdown_NER` (`markdown_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `SEMANTIC`
    FOREIGN KEY (`SEMANTIC`)
    REFERENCES `mydb`.`markdown_SEMANTIC` (`markdown_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `INTENTION`
    FOREIGN KEY (`INTENTION`)
    REFERENCES `mydb`.`markdown_INTENTION` (`markdown_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`files`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`files` (
  `file_id` INT NOT NULL,
  `file_name` VARCHAR(45) NOT NULL,
  `admin_id` INT NOT NULL,
  `branch1` INT NOT NULL,
  `branch2` INT NOT NULL,
  `original` VARCHAR(45) NOT NULL,
  `final_NER` VARCHAR(45) NULL,
  `final_SEMANTIC` VARCHAR(45) NULL,
  `final_INTENTION` VARCHAR(45) NULL,
  PRIMARY KEY (`file_id`),
  UNIQUE INDEX `file_id_UNIQUE` (`file_id` ASC) VISIBLE,
  INDEX `user_id_idx` (`admin_id` ASC) VISIBLE,
  INDEX `branch1_idx` (`branch1` ASC) VISIBLE,
  INDEX `branch2_idx` (`branch2` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`admin_id`)
    REFERENCES `mydb`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `branch1`
    FOREIGN KEY (`branch1`)
    REFERENCES `mydb`.`branch` (`branch_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `branch2`
    FOREIGN KEY (`branch2`)
    REFERENCES `mydb`.`branch` (`branch_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## EER модель
<p align="center">
  <img src="./anno_model.png">
</p>


## RESTfull сервіс для управління даними
 
### Підключення до бази даних
```js
const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234qwer',
  database: 'mydb'
}); 
```
  
### express.js-сервер

```js
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
```
### Файл контролерів для обробки запитів
```js
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
```