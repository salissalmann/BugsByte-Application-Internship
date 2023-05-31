const express = require('express');
const Router = express.Router();
const User = require('../Models/UserModels')

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

Router.post('/createUser', jsonParser, async (req, res) => {
    let Success = false;
    try {
      const alreadyExists = await User.findOne({ email: req.body.email });
      if (alreadyExists) 
      {
        return res.status(400).json({ Success: Success, Error: "Sorry, User Already Exists" });
      }
  
      
      const createUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      });
  
      Success = true;
      res.send({ Success: Success, User: createUser });
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({ Error: "An Error Occurred" });
    }
  });

module.exports = Router;