const { application } = require("express");


app.get('/new', (req, res) => {
    res.render('this view')
})