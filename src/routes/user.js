const express = require('express');
const router = express.Router();
const User = require("../models/user");

//in-memory array for app
inmem_users = [];

router.post('/users', (req, res) => {
    if( !req.body.name || !req.body.email) 
        return res.status(400).send("name or email is missing");

    var user = new User(req.body.name, req.body.email);
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

router.put('/users/:id', (req, res) => {
    inmem_users.forEach((user) => {
        if (user.id === req.params.id) {
            if( !req.body.name || !req.body.email) 
                return res.status(400).send("name or email is missing");

            user.name = req.body.name;
            user.email = req.body.email;

            return res.status(200).json(user);
        }  
    });
    return res.status(404).send("user id does not exist");    
});

router.delete('/users/:id', (req, res) => {
    inmem_users.forEach((user) => {
        if (user.id === req.params.id) {
                user.name = null;
                user.email = null;
                user.id = null;

                return res.status(204).send("No Content");
        }
    });
    return res.status(404).send("user id does not exist");    
});

module.exports = router;