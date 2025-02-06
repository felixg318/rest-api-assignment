const express = require('express');
const router = express.Router();
const User = require("../models/user");

const inmem_users = [];

router.post('/users', (req, res) => {
//    console.log(req.body);
    if( !req.body.name || !req.body.email) 
        return res.status(400).send("name or email is missing");
    var user = new User(req.body.name, req.body.email);
//    console.log(user);
    inmem_users.push(user);

    return res.status(201).json(user);
});

router.get('/users/:id', (req, res) => {
    inmem_users.forEach((user) => {
        if (user.id == req.params.id)
            return res.status(200).json(user);
    });

    return res.status(404).send("user id does not exist");
});

/*
TODO PUT AND DELETE FUNCTIONS

router.put('/users/:id', (req, res) => {
    
});

router.delete('/users/:id', (req, res) => {
    
});
*/
module.exports = router;
