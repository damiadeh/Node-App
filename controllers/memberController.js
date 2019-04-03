const express = require('express');
var router = express.Router();

router.get('/', (req,res)=> {
    res.render("member/form", {
        viewTitle : "Add member"
    });
});

router.post('/',(req,res)=> {
    console.log(req.body);
});

module.exports = router;